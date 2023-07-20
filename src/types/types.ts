export interface MenuDto {
  id: number
  menu_name: string
  description: string
  menu_image_url: string
  calories: ICalories
  process: Process
  nationality: Nationality
  healthy_concern: HealthyConcern
  material: IMaterial[]
  cooking_step: ICookingStep[]
  updated_at: Date
  comment: IComment[]
  rating: IRating[]
}

export enum Nationality {
  Thai = 'ไทย',
  Chinese = 'จีน',
  Korean = 'เกาหลี',
  Japanese = 'ญี่ปุ่น',
  Italian = 'อิตาเลี่ยน',
}

export enum Process {
  Tom = 'ต้ม',
  Pad = 'ผัด',
  Tod = 'ทอด',
  Aob = 'อบ',
  Nung = 'นึ่ง',
  Yum = 'ยำ',
  Yang = 'ย่าง',
}

export enum HealthyConcern {
  Diabetes = 'เบาหวาน',
  Pressure = 'ความดัน',
  Heart = 'หัวใจ',
  Kidney = 'ไต',
  WeightLoss = 'ลดน้ำหนัก',
  Fat = 'อ้วน',
}

export interface IContent {
  menu_name: string
  description: string
  menu_image_url: string
  calories: ICalories
  process: Process
  nationality: Nationality
  healthy_concern: HealthyConcern
  material: IMaterial[]
  cooking_step: ICookingStep[]
  updated_at: Date
  comment: IComment[]
  rating: IRating[]
}

export interface IMaterial {
  name: string
  quantity: number
  unit: string
}

export interface ICookingStep {
  order: number
  description: string
}

export interface IComment {
  description: string
  commentBy: string
  commentedAt: Date
}

export interface IRating {
  value: number
  user: { id: string }
}
export interface ICalories {
  value: number
  unit: string
}
