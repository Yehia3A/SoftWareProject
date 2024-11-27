import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Course } from '../courses/courses.schema'; 
import { User } from '../users/user.schema'; 

@Schema({ timestamps: true })
export class Progress extends Document {

  @Prop({ required: true, min: 0, max: 100, default: 0 })
  completion_percentage: number;

  @Prop({ default: Date.now })
  created_at: Date;
}

export const ProgressSchema = SchemaFactory.createForClass(Progress);
