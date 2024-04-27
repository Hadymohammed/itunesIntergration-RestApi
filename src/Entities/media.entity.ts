import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Term } from "./term.entity";

@Entity('media')
export class Media {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar'})
    type: string;
    @Column({type: 'varchar'})
    name: string;
    @Column({type: 'varchar'})
    viewUrl: string;
    @Column({ type:'varchar' ,nullable: true})
    artworkUrl100: string;

    @Column({type: 'varchar'})
    artist: string;
    @Column({type: 'varchar'})
    artistViewUrl: string;

    @Column({type: 'int'})
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