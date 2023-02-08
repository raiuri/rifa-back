import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

export class BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: string;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: string;

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: string;
}
