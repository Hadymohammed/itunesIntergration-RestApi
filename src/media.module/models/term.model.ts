import { Column, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Media } from "./media.model";

@Entity('terms')
export class Term {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;
    
    @OneToMany(() => Media, media => media.term)
    media: Media[];

    constructor(id: number, text: string) {
        this.id = id;
        this.text = text;
    }
}