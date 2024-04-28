export class MediaDetailsDto {
    id: number;
    type: string;
    name: string;
    viewUrl: string;
    artworkUrl100: string;
    artist: string;
    artistViewUrl: string;

    constructor(id:number,type: string, name: string, viewUrl: string, artworkUrl100: string, artist: string, artistViewUrl: string) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.viewUrl = viewUrl;
        this.artworkUrl100 = artworkUrl100;
        this.artist = artist;
        this.artistViewUrl = artistViewUrl;
    }
}