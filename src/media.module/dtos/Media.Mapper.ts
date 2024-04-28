//create media mapper 
import { ItunesResult } from "../../Integrations/Itunes/Itunes.response";
import { Media } from "../../Entities/media.entity";
import { Term } from "../../Entities/term.entity";
import { MediaDetailsDto } from "./out/mediaDetails.dto";

export class MediaMapper {
    static toDetailsDto(media: Media): MediaDetailsDto {
        return new MediaDetailsDto(
            media.id,
            media.type,
            media.name,
            media.viewUrl,
            media.artworkUrl100,
            media.artist,
            media.artistViewUrl
        );
    }
    static toCollectionMediaEntity(result:ItunesResult): Media{
        return new Media(
            result.wrapperType,
            result.collectionName,
            result.collectionViewUrl,
            result.artworkUrl100,
            result.artistName,
            result.artistViewUrl
        );
    }
    static toTrackMediaEntity(result:ItunesResult): Media{
        return new Media(
            result.wrapperType,
            result.trackName,
            result.trackViewUrl,
            result.artworkUrl100,
            result.artistName,
            result.artistViewUrl
        );
    }
    static toArtistMediaEntity(result:ItunesResult): Media{
        return new Media(
            result.wrapperType,
            result.artistName,
            result.artistViewUrl,
            result.artworkUrl100,
            result.artistName,
            result.artistViewUrl
        );
    }
}