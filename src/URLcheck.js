const url1 = "https://cvsterlite.s3.ap-south-1.amazonaws.com/Sterlite_Deployment/dashboard/jetson1/2023-07-03//13-09-12_ROUND.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA24ADS5JH6NXSW3IR%2F20230817%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230817T062023Z&X-Amz-Expires=900&X-Amz-Signature=7e19e757c8151fed46c2768e3bb5bb0d32050e69649a40501316e566b91953c9&X-Amz-SignedHeaders=host&x-id=GetObject";
const url2 = "https://cvsterlite.s3.ap-south-1.amazonaws.com/Sterlite_Deployment/dashboard/jetson1/2023-07-03//13-09-12_ROUND.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA24ADS5JH6NXSW3IR%2F20230817%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230817T075202Z&X-Amz-Expires=900&X-Amz-Signature=e61d70547903523ff1d1eac34a3da7c7ebc83c5052b9599b1055e8003b88f7a8&X-Amz-SignedHeaders=host&x-id=GetObject";

if(url1 === url2){
    console.log("Same");
}else{
    console.log("Not Same");
}


// const shifts = {
//     shift1: {startTime: 7, endTime: 15},
//     shift2: { startTime: 15, endTime: 23 },
//     shift3: { startTime: 23, endTime: 7 }
//   }

// let imageArray = [ "Sterlite_Deployment/dashboard/jetson3/2023-08-23/",
// "Sterlite_Deployment/dashboard/jetson3/2023-08-23//16-00-39_ROUND.jpg",
// "Sterlite_Deployment/dashboard/jetson3/2023-08-23//16-26-55_ROUND.jpg",
// "Sterlite_Deployment/dashboard/jetson3/2023-08-23//16-29-49_ROUND.jpg",
// "Sterlite_Deployment/dashboard/jetson3/2023-08-23//16-31-13_ROUND.jpg"];

// const img = imageArray.map((imgurl) =>{
//   return imgurl;
// })
// console.log(img);


// code to extract the timestamp part
// const image = "Sterlite_Deployment/dashboard/jetson3/2023-08-23//16-00-39_ROUND.jpg";

// const parts = image.split("/");

// console.log(parts);

// const filename = parts[parts.length - 1];
// console.log(filename);

// const timestamp = filename.split("_")[0].split("-").slice(-3).join(":");
// console.log(timestamp);
// console.log(typeof(timestamp));


const array = [1,2,3,4,5,6,7,8,9];
console.log(array.slice(1));
// console.log(array.slice(-3).join(":"));

//         const currentDate =  new Date();
//         const todayYear = currentDate.getFullYear();
//         const todayMonth = (currentDate.getMonth() + 1).toString().padStart(2,'0');
//         const todayDay = (currentDate.getDate()).toString().padStart(2,'0');

//         const todayDate = `${todayYear}-${todayMonth}-${todayDay}`;
//         console.log(todayDate);

//         let a = 1;
//         let b = 2;

        
//         console.log(a>b && a === b);




//         const imageUrl = "Sterlite_Deployment/dashboard/jetson3/2023-08-23//16-00-39_ROUND.jpg";
//         console.log(imageUrl.split("/").pop());



      //   let imgURLs = ["Sterlite_Deployment/dashboard/jetson3/2023-08-23//16-00-39_ROUND.jpg",
      //   "Sterlite_Deployment/dashboard/jetson3/2023-08-23//16-26-55_ROUND.jpg",
      //   "Sterlite_Deployment/dashboard/jetson3/2023-08-23//16-29-49_ROUND.jpg",
      //   "Sterlite_Deployment/dashboard/jetson3/2023-08-23//16-31-13_ROUND.jpg"]
      //   const shiftStartTimes = {
      //     "Shift 1": 7,
      //     "Shift 2": 15,
      //     "Shift 3": 23
      // };
      // const selectedShiftStartHour = shiftStartTimes["Shift 1"];
      // const selectedShiftEndHour = (selectedShiftStartHour + 8) % 24;

      // const filteredImages = imgURLs.filter((imgURL) => {
      //     const Imgparts = imgURL.split("/");
      //     const ImgfileName = Imgparts[Imgparts.length - 1];
      //     const Imgtimestamp = ImgfileName.split("_")[0].split("-").slice(-3).join(":");
      //     console.log(Imgtimestamp);
      //     const hour = parseInt(Imgtimestamp.split(":")[0]);
      //     console.log(hour);

      //     if (selectedShiftStartHour < selectedShiftEndHour) {
      //         return hour >= selectedShiftStartHour && hour < selectedShiftEndHour;
      //     } else {
      //         // Handle the case where the shift spans across midnight
      //         return hour >= selectedShiftStartHour || hour < selectedShiftEndHour;
      //     }
      //   });
      //   console.log(filteredImages);

      // const identifier = "Sterlite_Deployment/dashboard/jetson3/2023-09-04//12-59-34_ROUND.jpg";
      // const f = identifier.split('/');
      // const jet = f[f.length - 4];
      // const date = f[f.length - 3];
      // console.log(jet);
      // console.log(date);

      // console.log(typeof(null));
      // console.log(typeof(undefined));
      // console.log(null === undefined);

      function First(){
            console.log("First");
        }
        
        function Second(){
            setTimeout(()=>{
                console.log("Second")
            }, 0);
        }
        
        function Third(){
            Promise.resolve(1).then(()=>{
                console.log("Third");
            });
        }
        
        function Fourth(){
            console.log("Fourth");
        }
        
        First();
        Second();
        Third();
        Fourth();


        function sumOfThreeElements(...elements){
            return new Promise((resolve, reject) =>{
                if(elements.length > 3){
                    reject("Only three elements can be stored");
                } else{
                    let sum = 0;
                    let i = 0;
                    while(i < elements.length){
                        sum += elements[i];
                        i++;
                    }
                    resolve("The sum is "+sum);
                }
            })
        }
        sumOfThreeElements(1,2,3).then(result => console.log(result)).catch((err) => console.error(err));

