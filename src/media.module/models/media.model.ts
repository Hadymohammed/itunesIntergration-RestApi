import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Term } from "./term.model";

@Entity('media')
export class Media {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    type: string;
    @Column()
    name: string;
    @Column()
    viewUrl: string;
    @Column({ nullable: true})
    artworkUrl100: string;

    @Column()
    artist: string;
    @Column()
    artistViewUrl: string;

    termId: number;
    //relations
    @ManyToOne(() => Term, term => term.id)
    @JoinColumn({ name: 'termId' })
    term: Term;

    constructor(type: string, name: string, viewUrl: string, artworkUrl100: string, artist: string, artistViewUrl: string) {
        this.type = type;
        this.name = name;
        this.viewUrl = viewUrl;
        this.artworkUrl100 = artworkUrl100;
        this.artist = artist;
        this.artistViewUrl = artistViewUrl;
    }
}