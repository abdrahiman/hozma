import { Document, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from 'src/users/user.entity';

@Schema({ timestamps: true })
export class Lesson extends Document {
  @Prop({ type: 'String', required: true })
  name: string;

  @Prop({ type: 'String', default: '' })
  description: string;

  @Prop({ type: ['String'] })
  lesson: string[];

  @Prop({
    type: 'String',
    default: '',
  })
  subject: string;

  @Prop({ type: Types.ObjectId, ref: User.name })
  publisher: User | Types.ObjectId;

  @Prop({type: ['String'],default:[]})
  tags:string[];

  @Prop({type:'String',default:""})
  grade:string;

}

export const LessonSchema = SchemaFactory.createForClass(Lesson);
