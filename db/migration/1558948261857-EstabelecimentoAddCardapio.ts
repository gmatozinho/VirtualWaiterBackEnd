import {MigrationInterface, QueryRunner} from 'typeorm';

export class EstabelecimentoAddCardapio1558948261857 implements MigrationInterface {

    async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(' ALTER TABLE CARDAPIO DROP "estabelecimentoId" ');
        await queryRunner.query(' ALTER TABLE ESTABELECIMENTO ADD "cardapioId" INT4 NULL ');
        await queryRunner.query(' ALTER TABLE ESTABELECIMENTO ADD CONSTRAINT ' +
                        ' fk_d35a276174459bb0581d FOREIGN KEY ("cardapioId") REFERENCES CARDAPIO (ID) ');

    }

    async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(' ALTER TABLE ESTABELECIMENTO DROP "cardapioId" ');
        await queryRunner.query(' ALTER TABLE CARDAPIO ADD "estabelecimentoId" INT4 ');
        await queryRunner.query(' ALTER TABLE CARDAPIO ADD CONSTRAINT ' +
                    ' fk_d35a276174459bb0581d FOREIGN KEY ("estabelecimentoId") REFERENCES ESTABELECIMENTO (ID) ');
    }

}
