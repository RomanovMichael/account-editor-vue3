export interface IAccountType {
  id: 'ldap' | 'local'
  label: string
}

export const ACCOUNT_TYPES: IAccountType[] = [
  { id: 'ldap', label: 'LDAP' },
  { id: 'local', label: 'Локальная' },
]

export interface IAccount {
  id: string
  labelsString: string
  typeId: IAccountType['id']
  login: string
  password: string | null
}
