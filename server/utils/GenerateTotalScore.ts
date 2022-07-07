export {}

interface Iresults{
        task_id : number
        task_title : string
        score : number
        answer_id : number
        user : string
        user_id : number
        date : string
        mapel : string
}



/*
=========== Pseducode ====================
1. cek pnajang array task
2. bila panjangnya 0 maka push ke array task
3. lakukan looping untuk melakukan pengecekan apakah task_id dan user_id sama dan answer task idny beda 
4. jika point 3 di atas terpenuhi maka lakukan penjumlahan score
5. jika tidak maka push ke array task dengan melakukan pengecekan task_id dan user_id
6. 
*/

const GenerateTotalScore = (score : any) : any => {
  
    let task : Iresults[] = [{
        task_id : score[0]?.Task.id,
        task_title : score[0]?.Task.title,
        score : score[0]?.score,
        answer_id : score[0]?.Answer_task.id,
        user : score[0]?.Answer_task.User.name,
        user_id : score[0]?.Answer_task.User.id,
        date : score[0]?.Answer_task.createdAt,
        mapel : score[0]?.Task.Mapel.nama
        }]

   
        for (let x = 0; x < task.length; x++) {
            for (let y = 0 ; y < score.length ; y++){
                if (task[x].task_id == score[y].Task.id && task[x].user_id  == score[y].Answer_task.User.id && task[x]. answer_id != score[y].Answer_task.id){
                    
                    task[x].score += score[y].score;
                
                }
    
                    if(!task.some((e: { task_id: number; user_id: number; }) => e.task_id === score[y].Task.id && e.user_id === score[y].Answer_task.User.id )){
                      task.push({
                            task_id : score[y].Task.id,
                            task_title : score[y].Task.title,
                            score : score[y].score,
                            answer_id : score[y].Answer_task.id,
                            user : score[y].Answer_task.User.name,
                            user_id : score[y].Answer_task.User.id,
                            date : score[y].Answer_task.createdAt,
                            mapel : score[y]?.Task.Mapel.nama
                        }) 
                    }
                } 
        
    }
    
    return task

  
}
module.exports = GenerateTotalScore;