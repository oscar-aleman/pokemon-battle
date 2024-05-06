import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialDatabase1714795502385 implements MigrationInterface {
  name = 'InitialDatabase1714795502385';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "pokemon" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "attack" integer NOT NULL, "defense" integer NOT NULL, "hp" integer NOT NULL, "speed" integer NOT NULL, "type" varchar NOT NULL, "imageUrl" varchar NOT NULL)`,
    );
    await queryRunner.query(
      `CREATE TABLE "battle" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "player1Id" varchar NOT NULL, "player2Id" varchar NOT NULL, "win" varchar NOT NULL)`,
    );

    await queryRunner.query(`
        INSERT INTO pokemon (id, name, attack, defense, hp, speed, type, imageUrl)
        VALUES ("pokemon-1","Pikachu",4,3,3,6,"Type","https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png"),
            ("pokemon-2","Charmander",4,3,3,4,"Type","https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png"),
            ("pokemon-3","Squirtle",3,4,3,3,"Type","https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png"),
            ("pokemon-4","Bulbasur",4,3,3,3,"Type","https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png"),
            ("pokemon-5","Eevee",4,3,4,5,"Type","https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/133.png")
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "battle"`);
    await queryRunner.query(`DROP TABLE "pokemon"`);
  }
}
