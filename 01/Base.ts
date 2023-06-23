export abstract class Base<T extends { id: number }> {
  constructor() {

  }

  private tabela: T[]

  listar(): T[] {
    return this.tabela
  }

  detalhar(id: number): T | undefined {
    return this.tabela.find(registro => registro.id === id)
  }

  cadastrar(novoRegistro: T): void {
    this.tabela.push(novoRegistro)
  }

  editar(id: number, novosDados: Omit<T, 'id'>): void {
    this.tabela[id] = {
      ...this.tabela[id],
      ...novosDados
    }
  }

  excluir(id: number): void {
    this.tabela = this.tabela.filter(registro => registro.id !== id)
  }
}