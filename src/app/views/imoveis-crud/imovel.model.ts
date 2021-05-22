export interface Imovel {
  id?: number;
  cep: number;
  numero: number;
  logradouro: string;
  complemento: string;
  bairro: string;
  quartos: number;
  valorAluguel: number;
  localidade: string;
  uf: string;
  situacao: string;
}
