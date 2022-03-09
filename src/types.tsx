export type Country = {
  name: {
    common: string
    nativeName: string
  }
  languages: {
    [key: string]: string
  }
  region: string
  flags: {
    png: string
  }
  capital: string
  population: number
  currencies: object
  borders: string[]
}
