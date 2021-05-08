
let token = Cookies.get('Web_Torrent_Token');
var decoded = jwt_decode(token);
const socket=io();
const fs = req
//Socket.ejs contents --

    const DIRECTORY_LINUX=`/home/siddharth/Documents/Projects/css-portfolio/`
    const DIRECTORY_WIN=`C:\\electronProject\\`

    var createDirectory=(dir)=>{
        console.log("Creating :",dir)
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
    }

        async function downloadMagnetURL(magnetURL,fileName){
        let DIRECTORY_WIN=`C:\\electronProject`
    
        const folderName=Cookies.get('roomName');

        let DIRECTORY_LINUX=`/home/siddharth/Documents/Projects`

        var client = new WebTorrent()

        // Sintel, a free, Creative Commons movie
        var torrentId = magnetURL

        client.add(torrentId, async function (torrent) {
        console.log(
            'bef add',client.downloadSpeed, client.uploadSpeed, client.ratio, client.progress)

        // Torrents can contain many files. Let's use the .mp4 file
        var file = await torrent.files.find(function (file) {
            console.log(file.downloaded,client.downloadSpeed, client.uploadSpeed, client.ratio, client.progress)

            return file
        })
        
        console.log("Here i am getting buffer")
        console.log("here is file :",file)
        file.getBuffer((err,buffer)=>{
            if(err) throw err;
            console.log(buffer)

            createDirectory(DIRECTORY_WIN+'\\'+folderName)
            DIRECTORY_WIN=DIRECTORY_WIN+'\\'+folderName
            console.log("Path :",DIRECTORY_WIN+'\\'+fileName)
            fs.appendFileSync(DIRECTORY_WIN+'\\'+fileName,buffer)
            console.log("after appending :",fs)
        })

        file.getBlobURL(function (err, url) {
            if (err) throw err
            var a = document.createElement('a')
            a.download = file.name
            a.href = url
            a.textContent = 'Download ' + file.name
            document.body.appendChild(a)
        })

        // Display the file by adding it to the DOM.
        // Supports video, audio, image files, and more!
        console.log(typeof(file))
        var div = document.createElement("div");
        file.appendTo(div);
        
        div.classList.add("userdata");
        document.getElementById("uploadData").appendChild(div);
        addLogs(fileName);
        })

    }
        
        function socketImplementation(roomId,roomName)
        {
            
            
            console.log(socket)
            socket.connect('http://localhost:8000')
            console.log("userobj: ",decoded)
            
            socket.emit('join_room',{userObj:decoded,roomID:roomId,roomName:roomName})
        }

        socket.on('joined_room',(data)=>{
                console.log("asert",data);
                alert(data)
            })

        socket.on('share_file',({magnetURL,fileName})=>{
            console.log("MagnetLink",magnetURL,fileName);
            downloadMagnetURL(magnetURL,fileName);
        })

        function addLogs(fileName) {
		let DIRECTORY_WIN=`C:\\electronProject`
        var folderName = Cookies.get('roomName');
		createDirectory(DIRECTORY_WIN+"\\"+folderName);
        var log = fileName

		var path = DIRECTORY_WIN+"\\"+folderName+"\\logs.txt";

		var obj = `
		{
			"file":"`+log+`",
			"datetime":"`+new Date().toLocaleString()+`"
		}
		`;
        console.log("sdfghzxcvbn",folderName, log,obj,JSON.parse(obj));

		fs.appendFile(path,JSON.stringify(JSON.parse(obj))+";", function (err) {
				if (err) throw err;
				console.log('Saved!');
			} );

            fs.readFile(path, 'utf8' , (err, data) => {
			if (err) {
				console.error(err)
				return
			}
			var arr = data.split(";");
			console.log("raed",data,arr)
			})
		
      }

//end pf socket.ejs

//Serverroom.ejs content

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});
  });


  function retrieveLogs()
  {
    
    const DIRECTORY_WIN=`C:\\electronProject`
    var folderName = Cookies.get('roomName');

		var path = DIRECTORY_WIN+"\\"+folderName+"\\logs.txt";

    fs.readFile(path, 'utf8' , (err, data) => {
			if (err) {
				console.error(err)
				return
			}
			var arr = data.split(";");
			console.log("raed",data,arr);

			})
		
  }

    document.getElementById("username").innerText = decoded.firstName + " " + decoded.lastName;
    console.log("Cook: ",Cookies.get('Web_Torrent_Token'),"Deck: ",decoded);
    
    function getRoomMemberList(roomid,roomName)
    {
        Cookies.set('roomId',roomid);
        Cookies.set('roomName',roomName);
      const url = "/api/getRoomMembers?roomID="+roomid;
      console.log("api url: ", url);
      
      const userObj = {
        roomID: roomid
      }
      
      const axiosConfig={
        withCredentials:true
      }

      document.getElementById("serverOwner").innerHTML = `
        <li class="collection-item avatar blue-grey lighten-5">
            <img src="images/yuna.jpg" alt="" class="circle grey">
            <span class="title">`+roomName+`</span>
        </li>
      `;
      

      document.getElementById("serverParticipant").innerHTML = '';
      axios.get(url,axiosConfig).then((response) => {

        for(var i=0;i<response.data.roomMembers.length;i++)
            {
                document.getElementById("serverParticipant").innerHTML += `<li class="collection-item avatar blue-grey lighten-5" id=`+ response.data.roomMembers[i] +`>
                            <i class="material-icons circle green">insert_chart</i>
                            <span class="title">` + response.data.roomMembers[i] + `</span>
                            <p>First Line</p>
                        </li>
                        `;
                
            }      
      })

      socketImplementation(roomid,roomName);
      retrieveLogs();
    }

    function getAllRooms()
    {
      const url = "/api/getAllRooms?emailID="+decoded.emailID;
      console.log("api url: ", url);
      
      const userObj = {
        roomName: 'masti hai mizaz me '
      }
      
      const axiosConfig={
        withCredentials:true
      }
      document.getElementById("serverList").innerHTML = '';
        axios.get(url,axiosConfig).then((response) => {
            for(var i=0;i<response.data.allRooms.length;i++)
            {
                document.getElementById("serverList").innerHTML += `<li class="collection-item avatar blue-grey lighten-5" id=`+ response.data.allRooms[i].roomID +` onclick="getRoomMemberList('`+response.data.allRooms[i].roomID+`','`+response.data.allRooms[i].roomName+`')">
                            <i class="material-icons circle green">insert_chart</i>
                            <span class="title">` + response.data.allRooms[i].roomName + `</span>
                            <p>First Line</p>
                        </li>`;    
            }
        })
    }
    getAllRooms();

    function CreateRoom(){

        const url = "/api/createRoom?creatorID="+decoded.emailID;
        const roomName = document.getElementById("server_name").value;

        const userObj = {
        roomName: roomName
        }

        const axiosConfig={
        withCredentials:true
        }

        axios.post(url,userObj,axiosConfig)
        .then(response=>{
        getAllRooms();
        })
        .catch(err=>{
        console.log(err)
        })
    }

//end of serverrrom.ejs

//sereverData contents

async function handleFilesUpload(event) {

    const uploadFiles = event.target.files;
    
        try{
                var client = new WebTorrent()
    
                var files = document.querySelector('input[type=file]').files;
                console.log("Files:",files);
                var roomId = Cookies.get('roomId');
                var roomName = Cookies.get('roomName');
                for (var i = 0; i < event.target.files.length; i++) {
                  console.log("abc",i,files[i]);
                  client.seed(files[i], function (torrent) {
                  console.log("torrent",i,torrent.magnetURI)
                  socket.emit('sending_file',{senderObj:decoded,roomID:roomId,magnetURL:torrent.magnetURI,fileName:files[0].name})
                })
            }
          
        } 
        catch(e)
        {
            console.log("Terminated!!")
        }
      }
    
    
    
        document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems, {});
      });

//end of serverdata

//server participant


function AddParticipants(){

    const url = "/api/mail-room-id";
    const roomId = Cookies.get('roomId');
    console.log("vals",url,roomId);
    
    const userObj = {
        "emailIDs":[document.getElementById("email").value],
        "roomID": roomId
    }

    const axiosConfig={
    withCredentials:true
    }

    axios.post(url,userObj,axiosConfig)
    .then(response=>{
        console.log("qwsderfgtyh");
    })
    .catch(err=>{
    console.log("err",err)
    })
}

//end of serverParticipant