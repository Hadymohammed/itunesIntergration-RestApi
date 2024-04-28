import { Module } from "@nestjs/common";
import { MediaController } from "./media.controller";
import { MediaService } from "./media.service";
import { Term } from "../Entities/term.entity";
import { Media } from "../Entities/media.entity";
import { ItunesModule } from "../Integrations/Itunes/Itunes.module";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [ItunesModule,
    TypeOrmModule.forFeature([Media,Term])
  ],
  controllers: [MediaController],
  providers: [MediaService,],
  exports: [MediaService]
})

export class MediaModule {}