export interface PersonalDetails {
  name: string
  email: string
  phone: { desc: string; link: string }[]
  address: string[]
  location: string
  pan: string
  socials: { icon: string; desc: string; link: string }[]
  languages: { desc: string; rating: number }[]
  hobbies: string
}
