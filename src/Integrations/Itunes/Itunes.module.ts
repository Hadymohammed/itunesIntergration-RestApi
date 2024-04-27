import { Module } from "@nestjs/common";
import { ItunesService } from "./Itunes.service";

@Module({
  providers: [ItunesService],
  exports: [ItunesService],
})

export class ItunesModule {}