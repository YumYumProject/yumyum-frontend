export interface IUser {
  _id: string
  username: string
  password: string
  display_name: string
  healthy_concern: string
  food_allergen: string
}

export interface IContent {
  _id: string
  menu_name: string
  menu_image_url: string
  description: string
  calories: ICalories
  process: Process
  nationality: Nationality
  healthy_concern: HealthyConcern
  material: IMaterial[]
  cooking_step: ICookingStep[]
  updated_at: Date
  comment: IComment[]
  average_rating: number
  rating_count: number
}

export interface ICommentByUser {
  display_name: string
  user_id: string
  commentedAt: string
}

export interface IComment {
  _id: string
  description: string
  rating: number
  comment_by: ICommentByUser
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

export interface ICalories {
  value: number
  unit: string
}

export interface IRating {
  value: number
  user: { id: string }
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
