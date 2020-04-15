import { School } from '../model/academics'
import { Achievement } from '../model/achievements.model'
import { PersonalDetails } from '../model/personal-detail'
import { Skill } from '../model/skills.model'

export class DataStoreService {
  public academics: School[]
  public achivements: Achievement[]
  public personalDetails: PersonalDetails
  public skills: Skill[]
}
