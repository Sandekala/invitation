export interface IBride {
  name: string,
  parent: string,
  fullname: string,
  child_order: string,
  bank: {
    type: string,
    name: string,
    account: string,
  },
}

export interface IBrides {
  id: string,
  man: IBride,
  woman: IBride,
  created_at: string,
}

export interface IMariage {
  id: string,
  brides_id: string,
  mariage_time: string,
  reception_time: string,
  reception_time_end: string,
  mariage_location: string,
  reception_location: string,
  reception_location_map: string,
  reception_location_map_btn: string,
  story_line: Record<string, any>,
  created_at: string,
}

export interface IAssets {
  id: string,
  brides_id: string,
  man: string,
  woman: string,
  main: string,
  first_meet: string,
  in_relationship: string,
  engaged: string,
  photos: {
    src?: string,
    title?: string,
    alt?: string,
}[],
  created_at: string,
}

export interface IRemark {
  name: string,
  prayer: string,
  attendance: boolean,
}
