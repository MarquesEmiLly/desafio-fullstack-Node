import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm"

@Entity()
export class Candidate {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: "name", type: "varchar", nullable: true })
  name: String

  @Column({ name: "email", type: "varchar", nullable: true })
  email: String

  @Column({ name: "gender", type: "varchar", nullable: true })
  gender: String


  @Column({ name: "telephone", type: "varchar", nullable: true })
  number: Number

  @Column({ name: "cpf", type: "varchar", nullable: true })
  cpf: Number
  @CreateDateColumn({
    name: "created_at",
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP(6)",
    onUpdate: "CURRENT_TIMESTAMP(6)",
  })
  createdAt: Date

  @UpdateDateColumn({
    name: "updated_at",
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP(6)",
    onUpdate: "CURRENT_TIMESTAMP(6)",
  })
  updateAt: Date
}
