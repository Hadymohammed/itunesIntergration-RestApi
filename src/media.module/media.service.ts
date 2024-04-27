import { Inject, Injectable } from "@nestjs/common";
import { Media } from "../Entities/media.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm"; 
import { MediaDetailsDto } from "./dtos/out/mediaDetails.dto";
import { Term } from "../Entities/term.entity";
import { ItunesService } from "src/Integrations/Itunes/Itunes.service";
import { MediaMapper } from "./dtos/Media.Mapper";

@Injectable()
export class MediaService {
  constructor(
   @InjectRepository(Media) private readonly mediaRepository: Repository<Media>,
   @InjectRepository(Term) private readonly termRepository: Repository<Term>,
   private readonly itunesService: ItunesService,
  ) {}

    async getByTerm(term: string): Promise<MediaDetailsDto[]> {
        const isTermExist = await this.termRepository.findOne({ where: { text: term }, 
            relations: {
            media: true
        }});
        if (!isTermExist) {
            const itunesResponse = await this.itunesService.searchByTerm(term);
            const newTerm = new Term(term);
            await this.termRepository.save(newTerm);

            if (itunesResponse) {
                const media = itunesResponse.results?.map(result => {
                    switch (result.wrapperType) {
                        case 'track':
                            {
                                let media = MediaMapper.toTrackMediaEntity(result);
                                media.termId = newTerm.id;
                                return media;
                            }
                        case 'artist':{
                            let media = MediaMapper.toArtistMediaEntity(result);
                            media.termId = newTerm.id;
                            return media;
                        }
                        default:{
                            //collection data is always present in the response
                            let media = MediaMapper.toCollectionMediaEntity(result);
                            media.termId = newTerm.id;
                            return media;
                        }
                    }
                });
                console.log(media);
                await this.mediaRepository.save(media);

                return media.map(MediaMapper.toDetailsDto);
            }
        }
        else{
            return isTermExist.media?.map(MediaMapper.toDetailsDto);
        }
    }

    async getRandomMedia(): Promise<MediaDetailsDto[]> {
        const media = await this.mediaRepository.createQueryBuilder('media')
            .select()
            .orderBy('RANDOM()')
            .limit(50)
            .getMany();
        return media.map(MediaMapper.toDetailsDto);
    }
}