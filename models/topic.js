import mongoose , {Schema} from "mongoose";

const topicSchema = new Schema({
    topic_title:String,
    topic_description:String,

},{
    timestamps:true
})

const Topic = mongoose.models.Topic || mongoose.model('Topic',topicSchema);

export default Topic;