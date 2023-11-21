import mongoose from "mongoose"; 
const Schema=mongoose.Schema;

const folderSchema=new Schema({
    
    email:{type: String, required:true},
    folderName: {type: String, required:true},
    creationDate:{type: Date, default: Date.now},
    links: { type: [String], default: [] },
  }); 

  const Folder = mongoose.model('folder', folderSchema);

export default Folder;
  