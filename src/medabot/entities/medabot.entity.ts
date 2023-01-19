import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Medabot extends Document{

    @Prop({
        unique:true,
        index: true,
    })
    name:string;
    @Prop({
        unique:true,
        index: true,
    })
    no:number;
    @Prop()
    type:string;
    @Prop()
    medal:string;
    @Prop()
    model:string;
    @Prop()
    tinpet:string;
}


export const MedabotSchema = SchemaFactory.createForClass( Medabot );

