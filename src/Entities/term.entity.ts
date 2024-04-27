import { Column, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Media } from "./media.entity";

@Entity('terms')
export class Term {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;
    
    @OneToMany(() => Media, media => media.term)
    media: Media[];

    constructor(text: string) {
        this.text = text;
    }
}