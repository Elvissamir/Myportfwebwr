export interface DBCollectionData {
    document: string 
    data: any
}

export interface DBI {
    save: (data: DBCollectionData) => Promise<boolean>
}
