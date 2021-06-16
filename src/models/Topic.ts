import { prop, getModelForClass } from '@typegoose/typegoose'

export class Topics {
  @prop({ required: true })
  topics: string[]
}

const TopicsModel = getModelForClass(Topics, {
  schemaOptions: { collection: 'getatopic' },
})

export async function getRandomTopic() {
  const topic = await TopicsModel.aggregate([{ $unwind: '$topics' }, { $sample: { size: 1 } }])
  return topic[0].topics
}
