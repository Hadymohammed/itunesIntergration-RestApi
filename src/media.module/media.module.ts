import { Module } from "@nestjs/common";
import { MediaController } from "./media.controller";
import { MediaService } from "./media.service";
import { ItunesService } from "src/Integrations/Itunes/Itunes.service";
import { Repository } from "typeorm";
import { Term } from "../Entities/term.entity";
import { Media } from "../Entities/media.entity";
import { ItunesModule } from "src/Integrations/Itunes/Itunes.module";
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