import {
    BeforeInsert,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import { hashSync } from "bcrypt";
import { BaseEntity } from "src/common/base.entity";
import { Ticket } from "src/ticket/entities/ticket.entity";

@Entity({ name: 'users' })
export class User extends BaseEntity {
    @Column({ name: 'first_name' })
    firstName: string;

    @Column({ name: 'last_name' })
    lastName: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(() => Ticket, ticket => ticket.user)
    tickets: Ticket[];

    @BeforeInsert()
    hashPassword() {
        this.password = hashSync(this.password, 10);
    }
}
