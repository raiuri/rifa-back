import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "src/user/entities/user.entity";
import { BaseEntity } from "src/common/base.entity";

@Entity({ name: 'tickets' })
export class Ticket extends BaseEntity {
    @Column()
    number: number;

    @ManyToOne(() => User, user => user.id)
    user: User;
}
