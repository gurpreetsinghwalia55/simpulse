

/*structure for the document */
function init()
{
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27017/";
  
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("try");

    
    var structure={
      id:1,
      create_on:new Date(),
      values:{
        0:{0:{t:0,h:0,o:0,b:0},1:{t:0,h:0,o:0,b:0},2:{t:0,h:0,o:0,b:0},3:{t:0,h:0,o:0,b:0},4:{t:0,h:0,o:0,b:0},5:{t:0,h:0,o:0,b:0},6:{t:0,h:0,o:0,b:0},7:{t:0,h:0,o:0,b:0},8:{t:0,h:0,o:0,b:0},9:{t:0,h:0,o:0,b:0},10:{t:0,h:0,o:0,b:0},11:{t:0,h:0,o:0,b:0},12:{t:0,h:0,o:0,b:0},13:{t:0,h:0,o:0,b:0},14:{t:0,h:0,o:0,b:0},15:{t:0,h:0,o:0,b:0},16:{t:0,h:0,o:0,b:0},17:{t:0,h:0,o:0,b:0},18:{t:0,h:0,o:0,b:0},19:{t:0,h:0,o:0,b:0},20:{t:0,h:0,o:0,b:0},21:{t:0,h:0,o:0,b:0},22:{t:0,h:0,o:0,b:0},23:{t:0,h:0,o:0,b:0},24:{t:0,h:0,o:0,b:0},25:{t:0,h:0,o:0,b:0},26:{t:0,h:0,o:0,b:0},27:{t:0,h:0,o:0,b:0},28:{t:0,h:0,o:0,b:0},29:{t:0,h:0,o:0,b:0},30:{t:0,h:0,o:0,b:0},31:{t:0,h:0,o:0,b:0},32:{t:0,h:0,o:0,b:0},33:{t:0,h:0,o:0,b:0},34:{t:0,h:0,o:0,b:0},35:{t:0,h:0,o:0,b:0},36:{t:0,h:0,o:0,b:0},37:{t:0,h:0,o:0,b:0},38:{t:0,h:0,o:0,b:0},39:{t:0,h:0,o:0,b:0},40:{t:0,h:0,o:0,b:0},41:{t:0,h:0,o:0,b:0},42:{t:0,h:0,o:0,b:0},43:{t:0,h:0,o:0,b:0},44:{t:0,h:0,o:0,b:0},45:{t:0,h:0,o:0,b:0},46:{t:0,h:0,o:0,b:0},47:{t:0,h:0,o:0,b:0},48:{t:0,h:0,o:0,b:0},49:{t:0,h:0,o:0,b:0},50:{t:0,h:0,o:0,b:0},51:{t:0,h:0,o:0,b:0},52:{t:0,h:0,o:0,b:0},53:{t:0,h:0,o:0,b:0},54:{t:0,h:0,o:0,b:0},55:{t:0,h:0,o:0,b:0},56:{t:0,h:0,o:0,b:0},57:{t:0,h:0,o:0,b:0},58:{t:0,h:0,o:0,b:0},59:{t:0,h:0,o:0,b:0}},
    1:{0:{t:0,h:0,o:0,b:0},1:{t:0,h:0,o:0,b:0},2:{t:0,h:0,o:0,b:0},3:{t:0,h:0,o:0,b:0},4:{t:0,h:0,o:0,b:0},5:{t:0,h:0,o:0,b:0},6:{t:0,h:0,o:0,b:0},7:{t:0,h:0,o:0,b:0},8:{t:0,h:0,o:0,b:0},9:{t:0,h:0,o:0,b:0},10:{t:0,h:0,o:0,b:0},11:{t:0,h:0,o:0,b:0},12:{t:0,h:0,o:0,b:0},13:{t:0,h:0,o:0,b:0},14:{t:0,h:0,o:0,b:0},15:{t:0,h:0,o:0,b:0},16:{t:0,h:0,o:0,b:0},17:{t:0,h:0,o:0,b:0},18:{t:0,h:0,o:0,b:0},19:{t:0,h:0,o:0,b:0},20:{t:0,h:0,o:0,b:0},21:{t:0,h:0,o:0,b:0},22:{t:0,h:0,o:0,b:0},23:{t:0,h:0,o:0,b:0},24:{t:0,h:0,o:0,b:0},25:{t:0,h:0,o:0,b:0},26:{t:0,h:0,o:0,b:0},27:{t:0,h:0,o:0,b:0},28:{t:0,h:0,o:0,b:0},29:{t:0,h:0,o:0,b:0},30:{t:0,h:0,o:0,b:0},31:{t:0,h:0,o:0,b:0},32:{t:0,h:0,o:0,b:0},33:{t:0,h:0,o:0,b:0},34:{t:0,h:0,o:0,b:0},35:{t:0,h:0,o:0,b:0},36:{t:0,h:0,o:0,b:0},37:{t:0,h:0,o:0,b:0},38:{t:0,h:0,o:0,b:0},39:{t:0,h:0,o:0,b:0},40:{t:0,h:0,o:0,b:0},41:{t:0,h:0,o:0,b:0},42:{t:0,h:0,o:0,b:0},43:{t:0,h:0,o:0,b:0},44:{t:0,h:0,o:0,b:0},45:{t:0,h:0,o:0,b:0},46:{t:0,h:0,o:0,b:0},47:{t:0,h:0,o:0,b:0},48:{t:0,h:0,o:0,b:0},49:{t:0,h:0,o:0,b:0},50:{t:0,h:0,o:0,b:0},51:{t:0,h:0,o:0,b:0},52:{t:0,h:0,o:0,b:0},53:{t:0,h:0,o:0,b:0},54:{t:0,h:0,o:0,b:0},55:{t:0,h:0,o:0,b:0},56:{t:0,h:0,o:0,b:0},57:{t:0,h:0,o:0,b:0},58:{t:0,h:0,o:0,b:0},59:{t:0,h:0,o:0,b:0}},
    2:{0:{t:0,h:0,o:0,b:0},1:{t:0,h:0,o:0,b:0},2:{t:0,h:0,o:0,b:0},3:{t:0,h:0,o:0,b:0},4:{t:0,h:0,o:0,b:0},5:{t:0,h:0,o:0,b:0},6:{t:0,h:0,o:0,b:0},7:{t:0,h:0,o:0,b:0},8:{t:0,h:0,o:0,b:0},9:{t:0,h:0,o:0,b:0},10:{t:0,h:0,o:0,b:0},11:{t:0,h:0,o:0,b:0},12:{t:0,h:0,o:0,b:0},13:{t:0,h:0,o:0,b:0},14:{t:0,h:0,o:0,b:0},15:{t:0,h:0,o:0,b:0},16:{t:0,h:0,o:0,b:0},17:{t:0,h:0,o:0,b:0},18:{t:0,h:0,o:0,b:0},19:{t:0,h:0,o:0,b:0},20:{t:0,h:0,o:0,b:0},21:{t:0,h:0,o:0,b:0},22:{t:0,h:0,o:0,b:0},23:{t:0,h:0,o:0,b:0},24:{t:0,h:0,o:0,b:0},25:{t:0,h:0,o:0,b:0},26:{t:0,h:0,o:0,b:0},27:{t:0,h:0,o:0,b:0},28:{t:0,h:0,o:0,b:0},29:{t:0,h:0,o:0,b:0},30:{t:0,h:0,o:0,b:0},31:{t:0,h:0,o:0,b:0},32:{t:0,h:0,o:0,b:0},33:{t:0,h:0,o:0,b:0},34:{t:0,h:0,o:0,b:0},35:{t:0,h:0,o:0,b:0},36:{t:0,h:0,o:0,b:0},37:{t:0,h:0,o:0,b:0},38:{t:0,h:0,o:0,b:0},39:{t:0,h:0,o:0,b:0},40:{t:0,h:0,o:0,b:0},41:{t:0,h:0,o:0,b:0},42:{t:0,h:0,o:0,b:0},43:{t:0,h:0,o:0,b:0},44:{t:0,h:0,o:0,b:0},45:{t:0,h:0,o:0,b:0},46:{t:0,h:0,o:0,b:0},47:{t:0,h:0,o:0,b:0},48:{t:0,h:0,o:0,b:0},49:{t:0,h:0,o:0,b:0},50:{t:0,h:0,o:0,b:0},51:{t:0,h:0,o:0,b:0},52:{t:0,h:0,o:0,b:0},53:{t:0,h:0,o:0,b:0},54:{t:0,h:0,o:0,b:0},55:{t:0,h:0,o:0,b:0},56:{t:0,h:0,o:0,b:0},57:{t:0,h:0,o:0,b:0},58:{t:0,h:0,o:0,b:0},59:{t:0,h:0,o:0,b:0}},
    3:{0:{t:0,h:0,o:0,b:0},1:{t:0,h:0,o:0,b:0},2:{t:0,h:0,o:0,b:0},3:{t:0,h:0,o:0,b:0},4:{t:0,h:0,o:0,b:0},5:{t:0,h:0,o:0,b:0},6:{t:0,h:0,o:0,b:0},7:{t:0,h:0,o:0,b:0},8:{t:0,h:0,o:0,b:0},9:{t:0,h:0,o:0,b:0},10:{t:0,h:0,o:0,b:0},11:{t:0,h:0,o:0,b:0},12:{t:0,h:0,o:0,b:0},13:{t:0,h:0,o:0,b:0},14:{t:0,h:0,o:0,b:0},15:{t:0,h:0,o:0,b:0},16:{t:0,h:0,o:0,b:0},17:{t:0,h:0,o:0,b:0},18:{t:0,h:0,o:0,b:0},19:{t:0,h:0,o:0,b:0},20:{t:0,h:0,o:0,b:0},21:{t:0,h:0,o:0,b:0},22:{t:0,h:0,o:0,b:0},23:{t:0,h:0,o:0,b:0},24:{t:0,h:0,o:0,b:0},25:{t:0,h:0,o:0,b:0},26:{t:0,h:0,o:0,b:0},27:{t:0,h:0,o:0,b:0},28:{t:0,h:0,o:0,b:0},29:{t:0,h:0,o:0,b:0},30:{t:0,h:0,o:0,b:0},31:{t:0,h:0,o:0,b:0},32:{t:0,h:0,o:0,b:0},33:{t:0,h:0,o:0,b:0},34:{t:0,h:0,o:0,b:0},35:{t:0,h:0,o:0,b:0},36:{t:0,h:0,o:0,b:0},37:{t:0,h:0,o:0,b:0},38:{t:0,h:0,o:0,b:0},39:{t:0,h:0,o:0,b:0},40:{t:0,h:0,o:0,b:0},41:{t:0,h:0,o:0,b:0},42:{t:0,h:0,o:0,b:0},43:{t:0,h:0,o:0,b:0},44:{t:0,h:0,o:0,b:0},45:{t:0,h:0,o:0,b:0},46:{t:0,h:0,o:0,b:0},47:{t:0,h:0,o:0,b:0},48:{t:0,h:0,o:0,b:0},49:{t:0,h:0,o:0,b:0},50:{t:0,h:0,o:0,b:0},51:{t:0,h:0,o:0,b:0},52:{t:0,h:0,o:0,b:0},53:{t:0,h:0,o:0,b:0},54:{t:0,h:0,o:0,b:0},55:{t:0,h:0,o:0,b:0},56:{t:0,h:0,o:0,b:0},57:{t:0,h:0,o:0,b:0},58:{t:0,h:0,o:0,b:0},59:{t:0,h:0,o:0,b:0}},
    4:{0:{t:0,h:0,o:0,b:0},1:{t:0,h:0,o:0,b:0},2:{t:0,h:0,o:0,b:0},3:{t:0,h:0,o:0,b:0},4:{t:0,h:0,o:0,b:0},5:{t:0,h:0,o:0,b:0},6:{t:0,h:0,o:0,b:0},7:{t:0,h:0,o:0,b:0},8:{t:0,h:0,o:0,b:0},9:{t:0,h:0,o:0,b:0},10:{t:0,h:0,o:0,b:0},11:{t:0,h:0,o:0,b:0},12:{t:0,h:0,o:0,b:0},13:{t:0,h:0,o:0,b:0},14:{t:0,h:0,o:0,b:0},15:{t:0,h:0,o:0,b:0},16:{t:0,h:0,o:0,b:0},17:{t:0,h:0,o:0,b:0},18:{t:0,h:0,o:0,b:0},19:{t:0,h:0,o:0,b:0},20:{t:0,h:0,o:0,b:0},21:{t:0,h:0,o:0,b:0},22:{t:0,h:0,o:0,b:0},23:{t:0,h:0,o:0,b:0},24:{t:0,h:0,o:0,b:0},25:{t:0,h:0,o:0,b:0},26:{t:0,h:0,o:0,b:0},27:{t:0,h:0,o:0,b:0},28:{t:0,h:0,o:0,b:0},29:{t:0,h:0,o:0,b:0},30:{t:0,h:0,o:0,b:0},31:{t:0,h:0,o:0,b:0},32:{t:0,h:0,o:0,b:0},33:{t:0,h:0,o:0,b:0},34:{t:0,h:0,o:0,b:0},35:{t:0,h:0,o:0,b:0},36:{t:0,h:0,o:0,b:0},37:{t:0,h:0,o:0,b:0},38:{t:0,h:0,o:0,b:0},39:{t:0,h:0,o:0,b:0},40:{t:0,h:0,o:0,b:0},41:{t:0,h:0,o:0,b:0},42:{t:0,h:0,o:0,b:0},43:{t:0,h:0,o:0,b:0},44:{t:0,h:0,o:0,b:0},45:{t:0,h:0,o:0,b:0},46:{t:0,h:0,o:0,b:0},47:{t:0,h:0,o:0,b:0},48:{t:0,h:0,o:0,b:0},49:{t:0,h:0,o:0,b:0},50:{t:0,h:0,o:0,b:0},51:{t:0,h:0,o:0,b:0},52:{t:0,h:0,o:0,b:0},53:{t:0,h:0,o:0,b:0},54:{t:0,h:0,o:0,b:0},55:{t:0,h:0,o:0,b:0},56:{t:0,h:0,o:0,b:0},57:{t:0,h:0,o:0,b:0},58:{t:0,h:0,o:0,b:0},59:{t:0,h:0,o:0,b:0}},
    5:{0:{t:0,h:0,o:0,b:0},1:{t:0,h:0,o:0,b:0},2:{t:0,h:0,o:0,b:0},3:{t:0,h:0,o:0,b:0},4:{t:0,h:0,o:0,b:0},5:{t:0,h:0,o:0,b:0},6:{t:0,h:0,o:0,b:0},7:{t:0,h:0,o:0,b:0},8:{t:0,h:0,o:0,b:0},9:{t:0,h:0,o:0,b:0},10:{t:0,h:0,o:0,b:0},11:{t:0,h:0,o:0,b:0},12:{t:0,h:0,o:0,b:0},13:{t:0,h:0,o:0,b:0},14:{t:0,h:0,o:0,b:0},15:{t:0,h:0,o:0,b:0},16:{t:0,h:0,o:0,b:0},17:{t:0,h:0,o:0,b:0},18:{t:0,h:0,o:0,b:0},19:{t:0,h:0,o:0,b:0},20:{t:0,h:0,o:0,b:0},21:{t:0,h:0,o:0,b:0},22:{t:0,h:0,o:0,b:0},23:{t:0,h:0,o:0,b:0},24:{t:0,h:0,o:0,b:0},25:{t:0,h:0,o:0,b:0},26:{t:0,h:0,o:0,b:0},27:{t:0,h:0,o:0,b:0},28:{t:0,h:0,o:0,b:0},29:{t:0,h:0,o:0,b:0},30:{t:0,h:0,o:0,b:0},31:{t:0,h:0,o:0,b:0},32:{t:0,h:0,o:0,b:0},33:{t:0,h:0,o:0,b:0},34:{t:0,h:0,o:0,b:0},35:{t:0,h:0,o:0,b:0},36:{t:0,h:0,o:0,b:0},37:{t:0,h:0,o:0,b:0},38:{t:0,h:0,o:0,b:0},39:{t:0,h:0,o:0,b:0},40:{t:0,h:0,o:0,b:0},41:{t:0,h:0,o:0,b:0},42:{t:0,h:0,o:0,b:0},43:{t:0,h:0,o:0,b:0},44:{t:0,h:0,o:0,b:0},45:{t:0,h:0,o:0,b:0},46:{t:0,h:0,o:0,b:0},47:{t:0,h:0,o:0,b:0},48:{t:0,h:0,o:0,b:0},49:{t:0,h:0,o:0,b:0},50:{t:0,h:0,o:0,b:0},51:{t:0,h:0,o:0,b:0},52:{t:0,h:0,o:0,b:0},53:{t:0,h:0,o:0,b:0},54:{t:0,h:0,o:0,b:0},55:{t:0,h:0,o:0,b:0},56:{t:0,h:0,o:0,b:0},57:{t:0,h:0,o:0,b:0},58:{t:0,h:0,o:0,b:0},59:{t:0,h:0,o:0,b:0}},
    6:{0:{t:0,h:0,o:0,b:0},1:{t:0,h:0,o:0,b:0},2:{t:0,h:0,o:0,b:0},3:{t:0,h:0,o:0,b:0},4:{t:0,h:0,o:0,b:0},5:{t:0,h:0,o:0,b:0},6:{t:0,h:0,o:0,b:0},7:{t:0,h:0,o:0,b:0},8:{t:0,h:0,o:0,b:0},9:{t:0,h:0,o:0,b:0},10:{t:0,h:0,o:0,b:0},11:{t:0,h:0,o:0,b:0},12:{t:0,h:0,o:0,b:0},13:{t:0,h:0,o:0,b:0},14:{t:0,h:0,o:0,b:0},15:{t:0,h:0,o:0,b:0},16:{t:0,h:0,o:0,b:0},17:{t:0,h:0,o:0,b:0},18:{t:0,h:0,o:0,b:0},19:{t:0,h:0,o:0,b:0},20:{t:0,h:0,o:0,b:0},21:{t:0,h:0,o:0,b:0},22:{t:0,h:0,o:0,b:0},23:{t:0,h:0,o:0,b:0},24:{t:0,h:0,o:0,b:0},25:{t:0,h:0,o:0,b:0},26:{t:0,h:0,o:0,b:0},27:{t:0,h:0,o:0,b:0},28:{t:0,h:0,o:0,b:0},29:{t:0,h:0,o:0,b:0},30:{t:0,h:0,o:0,b:0},31:{t:0,h:0,o:0,b:0},32:{t:0,h:0,o:0,b:0},33:{t:0,h:0,o:0,b:0},34:{t:0,h:0,o:0,b:0},35:{t:0,h:0,o:0,b:0},36:{t:0,h:0,o:0,b:0},37:{t:0,h:0,o:0,b:0},38:{t:0,h:0,o:0,b:0},39:{t:0,h:0,o:0,b:0},40:{t:0,h:0,o:0,b:0},41:{t:0,h:0,o:0,b:0},42:{t:0,h:0,o:0,b:0},43:{t:0,h:0,o:0,b:0},44:{t:0,h:0,o:0,b:0},45:{t:0,h:0,o:0,b:0},46:{t:0,h:0,o:0,b:0},47:{t:0,h:0,o:0,b:0},48:{t:0,h:0,o:0,b:0},49:{t:0,h:0,o:0,b:0},50:{t:0,h:0,o:0,b:0},51:{t:0,h:0,o:0,b:0},52:{t:0,h:0,o:0,b:0},53:{t:0,h:0,o:0,b:0},54:{t:0,h:0,o:0,b:0},55:{t:0,h:0,o:0,b:0},56:{t:0,h:0,o:0,b:0},57:{t:0,h:0,o:0,b:0},58:{t:0,h:0,o:0,b:0},59:{t:0,h:0,o:0,b:0}},
    7:{0:{t:0,h:0,o:0,b:0},1:{t:0,h:0,o:0,b:0},2:{t:0,h:0,o:0,b:0},3:{t:0,h:0,o:0,b:0},4:{t:0,h:0,o:0,b:0},5:{t:0,h:0,o:0,b:0},6:{t:0,h:0,o:0,b:0},7:{t:0,h:0,o:0,b:0},8:{t:0,h:0,o:0,b:0},9:{t:0,h:0,o:0,b:0},10:{t:0,h:0,o:0,b:0},11:{t:0,h:0,o:0,b:0},12:{t:0,h:0,o:0,b:0},13:{t:0,h:0,o:0,b:0},14:{t:0,h:0,o:0,b:0},15:{t:0,h:0,o:0,b:0},16:{t:0,h:0,o:0,b:0},17:{t:0,h:0,o:0,b:0},18:{t:0,h:0,o:0,b:0},19:{t:0,h:0,o:0,b:0},20:{t:0,h:0,o:0,b:0},21:{t:0,h:0,o:0,b:0},22:{t:0,h:0,o:0,b:0},23:{t:0,h:0,o:0,b:0},24:{t:0,h:0,o:0,b:0},25:{t:0,h:0,o:0,b:0},26:{t:0,h:0,o:0,b:0},27:{t:0,h:0,o:0,b:0},28:{t:0,h:0,o:0,b:0},29:{t:0,h:0,o:0,b:0},30:{t:0,h:0,o:0,b:0},31:{t:0,h:0,o:0,b:0},32:{t:0,h:0,o:0,b:0},33:{t:0,h:0,o:0,b:0},34:{t:0,h:0,o:0,b:0},35:{t:0,h:0,o:0,b:0},36:{t:0,h:0,o:0,b:0},37:{t:0,h:0,o:0,b:0},38:{t:0,h:0,o:0,b:0},39:{t:0,h:0,o:0,b:0},40:{t:0,h:0,o:0,b:0},41:{t:0,h:0,o:0,b:0},42:{t:0,h:0,o:0,b:0},43:{t:0,h:0,o:0,b:0},44:{t:0,h:0,o:0,b:0},45:{t:0,h:0,o:0,b:0},46:{t:0,h:0,o:0,b:0},47:{t:0,h:0,o:0,b:0},48:{t:0,h:0,o:0,b:0},49:{t:0,h:0,o:0,b:0},50:{t:0,h:0,o:0,b:0},51:{t:0,h:0,o:0,b:0},52:{t:0,h:0,o:0,b:0},53:{t:0,h:0,o:0,b:0},54:{t:0,h:0,o:0,b:0},55:{t:0,h:0,o:0,b:0},56:{t:0,h:0,o:0,b:0},57:{t:0,h:0,o:0,b:0},58:{t:0,h:0,o:0,b:0},59:{t:0,h:0,o:0,b:0}},
    8:{0:{t:0,h:0,o:0,b:0},1:{t:0,h:0,o:0,b:0},2:{t:0,h:0,o:0,b:0},3:{t:0,h:0,o:0,b:0},4:{t:0,h:0,o:0,b:0},5:{t:0,h:0,o:0,b:0},6:{t:0,h:0,o:0,b:0},7:{t:0,h:0,o:0,b:0},8:{t:0,h:0,o:0,b:0},9:{t:0,h:0,o:0,b:0},10:{t:0,h:0,o:0,b:0},11:{t:0,h:0,o:0,b:0},12:{t:0,h:0,o:0,b:0},13:{t:0,h:0,o:0,b:0},14:{t:0,h:0,o:0,b:0},15:{t:0,h:0,o:0,b:0},16:{t:0,h:0,o:0,b:0},17:{t:0,h:0,o:0,b:0},18:{t:0,h:0,o:0,b:0},19:{t:0,h:0,o:0,b:0},20:{t:0,h:0,o:0,b:0},21:{t:0,h:0,o:0,b:0},22:{t:0,h:0,o:0,b:0},23:{t:0,h:0,o:0,b:0},24:{t:0,h:0,o:0,b:0},25:{t:0,h:0,o:0,b:0},26:{t:0,h:0,o:0,b:0},27:{t:0,h:0,o:0,b:0},28:{t:0,h:0,o:0,b:0},29:{t:0,h:0,o:0,b:0},30:{t:0,h:0,o:0,b:0},31:{t:0,h:0,o:0,b:0},32:{t:0,h:0,o:0,b:0},33:{t:0,h:0,o:0,b:0},34:{t:0,h:0,o:0,b:0},35:{t:0,h:0,o:0,b:0},36:{t:0,h:0,o:0,b:0},37:{t:0,h:0,o:0,b:0},38:{t:0,h:0,o:0,b:0},39:{t:0,h:0,o:0,b:0},40:{t:0,h:0,o:0,b:0},41:{t:0,h:0,o:0,b:0},42:{t:0,h:0,o:0,b:0},43:{t:0,h:0,o:0,b:0},44:{t:0,h:0,o:0,b:0},45:{t:0,h:0,o:0,b:0},46:{t:0,h:0,o:0,b:0},47:{t:0,h:0,o:0,b:0},48:{t:0,h:0,o:0,b:0},49:{t:0,h:0,o:0,b:0},50:{t:0,h:0,o:0,b:0},51:{t:0,h:0,o:0,b:0},52:{t:0,h:0,o:0,b:0},53:{t:0,h:0,o:0,b:0},54:{t:0,h:0,o:0,b:0},55:{t:0,h:0,o:0,b:0},56:{t:0,h:0,o:0,b:0},57:{t:0,h:0,o:0,b:0},58:{t:0,h:0,o:0,b:0},59:{t:0,h:0,o:0,b:0}},
    9:{0:{t:0,h:0,o:0,b:0},1:{t:0,h:0,o:0,b:0},2:{t:0,h:0,o:0,b:0},3:{t:0,h:0,o:0,b:0},4:{t:0,h:0,o:0,b:0},5:{t:0,h:0,o:0,b:0},6:{t:0,h:0,o:0,b:0},7:{t:0,h:0,o:0,b:0},8:{t:0,h:0,o:0,b:0},9:{t:0,h:0,o:0,b:0},10:{t:0,h:0,o:0,b:0},11:{t:0,h:0,o:0,b:0},12:{t:0,h:0,o:0,b:0},13:{t:0,h:0,o:0,b:0},14:{t:0,h:0,o:0,b:0},15:{t:0,h:0,o:0,b:0},16:{t:0,h:0,o:0,b:0},17:{t:0,h:0,o:0,b:0},18:{t:0,h:0,o:0,b:0},19:{t:0,h:0,o:0,b:0},20:{t:0,h:0,o:0,b:0},21:{t:0,h:0,o:0,b:0},22:{t:0,h:0,o:0,b:0},23:{t:0,h:0,o:0,b:0},24:{t:0,h:0,o:0,b:0},25:{t:0,h:0,o:0,b:0},26:{t:0,h:0,o:0,b:0},27:{t:0,h:0,o:0,b:0},28:{t:0,h:0,o:0,b:0},29:{t:0,h:0,o:0,b:0},30:{t:0,h:0,o:0,b:0},31:{t:0,h:0,o:0,b:0},32:{t:0,h:0,o:0,b:0},33:{t:0,h:0,o:0,b:0},34:{t:0,h:0,o:0,b:0},35:{t:0,h:0,o:0,b:0},36:{t:0,h:0,o:0,b:0},37:{t:0,h:0,o:0,b:0},38:{t:0,h:0,o:0,b:0},39:{t:0,h:0,o:0,b:0},40:{t:0,h:0,o:0,b:0},41:{t:0,h:0,o:0,b:0},42:{t:0,h:0,o:0,b:0},43:{t:0,h:0,o:0,b:0},44:{t:0,h:0,o:0,b:0},45:{t:0,h:0,o:0,b:0},46:{t:0,h:0,o:0,b:0},47:{t:0,h:0,o:0,b:0},48:{t:0,h:0,o:0,b:0},49:{t:0,h:0,o:0,b:0},50:{t:0,h:0,o:0,b:0},51:{t:0,h:0,o:0,b:0},52:{t:0,h:0,o:0,b:0},53:{t:0,h:0,o:0,b:0},54:{t:0,h:0,o:0,b:0},55:{t:0,h:0,o:0,b:0},56:{t:0,h:0,o:0,b:0},57:{t:0,h:0,o:0,b:0},58:{t:0,h:0,o:0,b:0},59:{t:0,h:0,o:0,b:0}},
    10:{0:{t:0,h:0,o:0,b:0},1:{t:0,h:0,o:0,b:0},2:{t:0,h:0,o:0,b:0},3:{t:0,h:0,o:0,b:0},4:{t:0,h:0,o:0,b:0},5:{t:0,h:0,o:0,b:0},6:{t:0,h:0,o:0,b:0},7:{t:0,h:0,o:0,b:0},8:{t:0,h:0,o:0,b:0},9:{t:0,h:0,o:0,b:0},10:{t:0,h:0,o:0,b:0},11:{t:0,h:0,o:0,b:0},12:{t:0,h:0,o:0,b:0},13:{t:0,h:0,o:0,b:0},14:{t:0,h:0,o:0,b:0},15:{t:0,h:0,o:0,b:0},16:{t:0,h:0,o:0,b:0},17:{t:0,h:0,o:0,b:0},18:{t:0,h:0,o:0,b:0},19:{t:0,h:0,o:0,b:0},20:{t:0,h:0,o:0,b:0},21:{t:0,h:0,o:0,b:0},22:{t:0,h:0,o:0,b:0},23:{t:0,h:0,o:0,b:0},24:{t:0,h:0,o:0,b:0},25:{t:0,h:0,o:0,b:0},26:{t:0,h:0,o:0,b:0},27:{t:0,h:0,o:0,b:0},28:{t:0,h:0,o:0,b:0},29:{t:0,h:0,o:0,b:0},30:{t:0,h:0,o:0,b:0},31:{t:0,h:0,o:0,b:0},32:{t:0,h:0,o:0,b:0},33:{t:0,h:0,o:0,b:0},34:{t:0,h:0,o:0,b:0},35:{t:0,h:0,o:0,b:0},36:{t:0,h:0,o:0,b:0},37:{t:0,h:0,o:0,b:0},38:{t:0,h:0,o:0,b:0},39:{t:0,h:0,o:0,b:0},40:{t:0,h:0,o:0,b:0},41:{t:0,h:0,o:0,b:0},42:{t:0,h:0,o:0,b:0},43:{t:0,h:0,o:0,b:0},44:{t:0,h:0,o:0,b:0},45:{t:0,h:0,o:0,b:0},46:{t:0,h:0,o:0,b:0},47:{t:0,h:0,o:0,b:0},48:{t:0,h:0,o:0,b:0},49:{t:0,h:0,o:0,b:0},50:{t:0,h:0,o:0,b:0},51:{t:0,h:0,o:0,b:0},52:{t:0,h:0,o:0,b:0},53:{t:0,h:0,o:0,b:0},54:{t:0,h:0,o:0,b:0},55:{t:0,h:0,o:0,b:0},56:{t:0,h:0,o:0,b:0},57:{t:0,h:0,o:0,b:0},58:{t:0,h:0,o:0,b:0},59:{t:0,h:0,o:0,b:0}},
    11:{0:{t:0,h:0,o:0,b:0},1:{t:0,h:0,o:0,b:0},2:{t:0,h:0,o:0,b:0},3:{t:0,h:0,o:0,b:0},4:{t:0,h:0,o:0,b:0},5:{t:0,h:0,o:0,b:0},6:{t:0,h:0,o:0,b:0},7:{t:0,h:0,o:0,b:0},8:{t:0,h:0,o:0,b:0},9:{t:0,h:0,o:0,b:0},10:{t:0,h:0,o:0,b:0},11:{t:0,h:0,o:0,b:0},12:{t:0,h:0,o:0,b:0},13:{t:0,h:0,o:0,b:0},14:{t:0,h:0,o:0,b:0},15:{t:0,h:0,o:0,b:0},16:{t:0,h:0,o:0,b:0},17:{t:0,h:0,o:0,b:0},18:{t:0,h:0,o:0,b:0},19:{t:0,h:0,o:0,b:0},20:{t:0,h:0,o:0,b:0},21:{t:0,h:0,o:0,b:0},22:{t:0,h:0,o:0,b:0},23:{t:0,h:0,o:0,b:0},24:{t:0,h:0,o:0,b:0},25:{t:0,h:0,o:0,b:0},26:{t:0,h:0,o:0,b:0},27:{t:0,h:0,o:0,b:0},28:{t:0,h:0,o:0,b:0},29:{t:0,h:0,o:0,b:0},30:{t:0,h:0,o:0,b:0},31:{t:0,h:0,o:0,b:0},32:{t:0,h:0,o:0,b:0},33:{t:0,h:0,o:0,b:0},34:{t:0,h:0,o:0,b:0},35:{t:0,h:0,o:0,b:0},36:{t:0,h:0,o:0,b:0},37:{t:0,h:0,o:0,b:0},38:{t:0,h:0,o:0,b:0},39:{t:0,h:0,o:0,b:0},40:{t:0,h:0,o:0,b:0},41:{t:0,h:0,o:0,b:0},42:{t:0,h:0,o:0,b:0},43:{t:0,h:0,o:0,b:0},44:{t:0,h:0,o:0,b:0},45:{t:0,h:0,o:0,b:0},46:{t:0,h:0,o:0,b:0},47:{t:0,h:0,o:0,b:0},48:{t:0,h:0,o:0,b:0},49:{t:0,h:0,o:0,b:0},50:{t:0,h:0,o:0,b:0},51:{t:0,h:0,o:0,b:0},52:{t:0,h:0,o:0,b:0},53:{t:0,h:0,o:0,b:0},54:{t:0,h:0,o:0,b:0},55:{t:0,h:0,o:0,b:0},56:{t:0,h:0,o:0,b:0},57:{t:0,h:0,o:0,b:0},58:{t:0,h:0,o:0,b:0},59:{t:0,h:0,o:0,b:0}},
    12:{0:{t:0,h:0,o:0,b:0},1:{t:0,h:0,o:0,b:0},2:{t:0,h:0,o:0,b:0},3:{t:0,h:0,o:0,b:0},4:{t:0,h:0,o:0,b:0},5:{t:0,h:0,o:0,b:0},6:{t:0,h:0,o:0,b:0},7:{t:0,h:0,o:0,b:0},8:{t:0,h:0,o:0,b:0},9:{t:0,h:0,o:0,b:0},10:{t:0,h:0,o:0,b:0},11:{t:0,h:0,o:0,b:0},12:{t:0,h:0,o:0,b:0},13:{t:0,h:0,o:0,b:0},14:{t:0,h:0,o:0,b:0},15:{t:0,h:0,o:0,b:0},16:{t:0,h:0,o:0,b:0},17:{t:0,h:0,o:0,b:0},18:{t:0,h:0,o:0,b:0},19:{t:0,h:0,o:0,b:0},20:{t:0,h:0,o:0,b:0},21:{t:0,h:0,o:0,b:0},22:{t:0,h:0,o:0,b:0},23:{t:0,h:0,o:0,b:0},24:{t:0,h:0,o:0,b:0},25:{t:0,h:0,o:0,b:0},26:{t:0,h:0,o:0,b:0},27:{t:0,h:0,o:0,b:0},28:{t:0,h:0,o:0,b:0},29:{t:0,h:0,o:0,b:0},30:{t:0,h:0,o:0,b:0},31:{t:0,h:0,o:0,b:0},32:{t:0,h:0,o:0,b:0},33:{t:0,h:0,o:0,b:0},34:{t:0,h:0,o:0,b:0},35:{t:0,h:0,o:0,b:0},36:{t:0,h:0,o:0,b:0},37:{t:0,h:0,o:0,b:0},38:{t:0,h:0,o:0,b:0},39:{t:0,h:0,o:0,b:0},40:{t:0,h:0,o:0,b:0},41:{t:0,h:0,o:0,b:0},42:{t:0,h:0,o:0,b:0},43:{t:0,h:0,o:0,b:0},44:{t:0,h:0,o:0,b:0},45:{t:0,h:0,o:0,b:0},46:{t:0,h:0,o:0,b:0},47:{t:0,h:0,o:0,b:0},48:{t:0,h:0,o:0,b:0},49:{t:0,h:0,o:0,b:0},50:{t:0,h:0,o:0,b:0},51:{t:0,h:0,o:0,b:0},52:{t:0,h:0,o:0,b:0},53:{t:0,h:0,o:0,b:0},54:{t:0,h:0,o:0,b:0},55:{t:0,h:0,o:0,b:0},56:{t:0,h:0,o:0,b:0},57:{t:0,h:0,o:0,b:0},58:{t:0,h:0,o:0,b:0},59:{t:0,h:0,o:0,b:0}},
    13:{0:{t:0,h:0,o:0,b:0},1:{t:0,h:0,o:0,b:0},2:{t:0,h:0,o:0,b:0},3:{t:0,h:0,o:0,b:0},4:{t:0,h:0,o:0,b:0},5:{t:0,h:0,o:0,b:0},6:{t:0,h:0,o:0,b:0},7:{t:0,h:0,o:0,b:0},8:{t:0,h:0,o:0,b:0},9:{t:0,h:0,o:0,b:0},10:{t:0,h:0,o:0,b:0},11:{t:0,h:0,o:0,b:0},12:{t:0,h:0,o:0,b:0},13:{t:0,h:0,o:0,b:0},14:{t:0,h:0,o:0,b:0},15:{t:0,h:0,o:0,b:0},16:{t:0,h:0,o:0,b:0},17:{t:0,h:0,o:0,b:0},18:{t:0,h:0,o:0,b:0},19:{t:0,h:0,o:0,b:0},20:{t:0,h:0,o:0,b:0},21:{t:0,h:0,o:0,b:0},22:{t:0,h:0,o:0,b:0},23:{t:0,h:0,o:0,b:0},24:{t:0,h:0,o:0,b:0},25:{t:0,h:0,o:0,b:0},26:{t:0,h:0,o:0,b:0},27:{t:0,h:0,o:0,b:0},28:{t:0,h:0,o:0,b:0},29:{t:0,h:0,o:0,b:0},30:{t:0,h:0,o:0,b:0},31:{t:0,h:0,o:0,b:0},32:{t:0,h:0,o:0,b:0},33:{t:0,h:0,o:0,b:0},34:{t:0,h:0,o:0,b:0},35:{t:0,h:0,o:0,b:0},36:{t:0,h:0,o:0,b:0},37:{t:0,h:0,o:0,b:0},38:{t:0,h:0,o:0,b:0},39:{t:0,h:0,o:0,b:0},40:{t:0,h:0,o:0,b:0},41:{t:0,h:0,o:0,b:0},42:{t:0,h:0,o:0,b:0},43:{t:0,h:0,o:0,b:0},44:{t:0,h:0,o:0,b:0},45:{t:0,h:0,o:0,b:0},46:{t:0,h:0,o:0,b:0},47:{t:0,h:0,o:0,b:0},48:{t:0,h:0,o:0,b:0},49:{t:0,h:0,o:0,b:0},50:{t:0,h:0,o:0,b:0},51:{t:0,h:0,o:0,b:0},52:{t:0,h:0,o:0,b:0},53:{t:0,h:0,o:0,b:0},54:{t:0,h:0,o:0,b:0},55:{t:0,h:0,o:0,b:0},56:{t:0,h:0,o:0,b:0},57:{t:0,h:0,o:0,b:0},58:{t:0,h:0,o:0,b:0},59:{t:0,h:0,o:0,b:0}},
    14:{0:{t:0,h:0,o:0,b:0},1:{t:0,h:0,o:0,b:0},2:{t:0,h:0,o:0,b:0},3:{t:0,h:0,o:0,b:0},4:{t:0,h:0,o:0,b:0},5:{t:0,h:0,o:0,b:0},6:{t:0,h:0,o:0,b:0},7:{t:0,h:0,o:0,b:0},8:{t:0,h:0,o:0,b:0},9:{t:0,h:0,o:0,b:0},10:{t:0,h:0,o:0,b:0},11:{t:0,h:0,o:0,b:0},12:{t:0,h:0,o:0,b:0},13:{t:0,h:0,o:0,b:0},14:{t:0,h:0,o:0,b:0},15:{t:0,h:0,o:0,b:0},16:{t:0,h:0,o:0,b:0},17:{t:0,h:0,o:0,b:0},18:{t:0,h:0,o:0,b:0},19:{t:0,h:0,o:0,b:0},20:{t:0,h:0,o:0,b:0},21:{t:0,h:0,o:0,b:0},22:{t:0,h:0,o:0,b:0},23:{t:0,h:0,o:0,b:0},24:{t:0,h:0,o:0,b:0},25:{t:0,h:0,o:0,b:0},26:{t:0,h:0,o:0,b:0},27:{t:0,h:0,o:0,b:0},28:{t:0,h:0,o:0,b:0},29:{t:0,h:0,o:0,b:0},30:{t:0,h:0,o:0,b:0},31:{t:0,h:0,o:0,b:0},32:{t:0,h:0,o:0,b:0},33:{t:0,h:0,o:0,b:0},34:{t:0,h:0,o:0,b:0},35:{t:0,h:0,o:0,b:0},36:{t:0,h:0,o:0,b:0},37:{t:0,h:0,o:0,b:0},38:{t:0,h:0,o:0,b:0},39:{t:0,h:0,o:0,b:0},40:{t:0,h:0,o:0,b:0},41:{t:0,h:0,o:0,b:0},42:{t:0,h:0,o:0,b:0},43:{t:0,h:0,o:0,b:0},44:{t:0,h:0,o:0,b:0},45:{t:0,h:0,o:0,b:0},46:{t:0,h:0,o:0,b:0},47:{t:0,h:0,o:0,b:0},48:{t:0,h:0,o:0,b:0},49:{t:0,h:0,o:0,b:0},50:{t:0,h:0,o:0,b:0},51:{t:0,h:0,o:0,b:0},52:{t:0,h:0,o:0,b:0},53:{t:0,h:0,o:0,b:0},54:{t:0,h:0,o:0,b:0},55:{t:0,h:0,o:0,b:0},56:{t:0,h:0,o:0,b:0},57:{t:0,h:0,o:0,b:0},58:{t:0,h:0,o:0,b:0},59:{t:0,h:0,o:0,b:0}},
    15:{0:{t:0,h:0,o:0,b:0},1:{t:0,h:0,o:0,b:0},2:{t:0,h:0,o:0,b:0},3:{t:0,h:0,o:0,b:0},4:{t:0,h:0,o:0,b:0},5:{t:0,h:0,o:0,b:0},6:{t:0,h:0,o:0,b:0},7:{t:0,h:0,o:0,b:0},8:{t:0,h:0,o:0,b:0},9:{t:0,h:0,o:0,b:0},10:{t:0,h:0,o:0,b:0},11:{t:0,h:0,o:0,b:0},12:{t:0,h:0,o:0,b:0},13:{t:0,h:0,o:0,b:0},14:{t:0,h:0,o:0,b:0},15:{t:0,h:0,o:0,b:0},16:{t:0,h:0,o:0,b:0},17:{t:0,h:0,o:0,b:0},18:{t:0,h:0,o:0,b:0},19:{t:0,h:0,o:0,b:0},20:{t:0,h:0,o:0,b:0},21:{t:0,h:0,o:0,b:0},22:{t:0,h:0,o:0,b:0},23:{t:0,h:0,o:0,b:0},24:{t:0,h:0,o:0,b:0},25:{t:0,h:0,o:0,b:0},26:{t:0,h:0,o:0,b:0},27:{t:0,h:0,o:0,b:0},28:{t:0,h:0,o:0,b:0},29:{t:0,h:0,o:0,b:0},30:{t:0,h:0,o:0,b:0},31:{t:0,h:0,o:0,b:0},32:{t:0,h:0,o:0,b:0},33:{t:0,h:0,o:0,b:0},34:{t:0,h:0,o:0,b:0},35:{t:0,h:0,o:0,b:0},36:{t:0,h:0,o:0,b:0},37:{t:0,h:0,o:0,b:0},38:{t:0,h:0,o:0,b:0},39:{t:0,h:0,o:0,b:0},40:{t:0,h:0,o:0,b:0},41:{t:0,h:0,o:0,b:0},42:{t:0,h:0,o:0,b:0},43:{t:0,h:0,o:0,b:0},44:{t:0,h:0,o:0,b:0},45:{t:0,h:0,o:0,b:0},46:{t:0,h:0,o:0,b:0},47:{t:0,h:0,o:0,b:0},48:{t:0,h:0,o:0,b:0},49:{t:0,h:0,o:0,b:0},50:{t:0,h:0,o:0,b:0},51:{t:0,h:0,o:0,b:0},52:{t:0,h:0,o:0,b:0},53:{t:0,h:0,o:0,b:0},54:{t:0,h:0,o:0,b:0},55:{t:0,h:0,o:0,b:0},56:{t:0,h:0,o:0,b:0},57:{t:0,h:0,o:0,b:0},58:{t:0,h:0,o:0,b:0},59:{t:0,h:0,o:0,b:0}},
    16:{0:{t:0,h:0,o:0,b:0},1:{t:0,h:0,o:0,b:0},2:{t:0,h:0,o:0,b:0},3:{t:0,h:0,o:0,b:0},4:{t:0,h:0,o:0,b:0},5:{t:0,h:0,o:0,b:0},6:{t:0,h:0,o:0,b:0},7:{t:0,h:0,o:0,b:0},8:{t:0,h:0,o:0,b:0},9:{t:0,h:0,o:0,b:0},10:{t:0,h:0,o:0,b:0},11:{t:0,h:0,o:0,b:0},12:{t:0,h:0,o:0,b:0},13:{t:0,h:0,o:0,b:0},14:{t:0,h:0,o:0,b:0},15:{t:0,h:0,o:0,b:0},16:{t:0,h:0,o:0,b:0},17:{t:0,h:0,o:0,b:0},18:{t:0,h:0,o:0,b:0},19:{t:0,h:0,o:0,b:0},20:{t:0,h:0,o:0,b:0},21:{t:0,h:0,o:0,b:0},22:{t:0,h:0,o:0,b:0},23:{t:0,h:0,o:0,b:0},24:{t:0,h:0,o:0,b:0},25:{t:0,h:0,o:0,b:0},26:{t:0,h:0,o:0,b:0},27:{t:0,h:0,o:0,b:0},28:{t:0,h:0,o:0,b:0},29:{t:0,h:0,o:0,b:0},30:{t:0,h:0,o:0,b:0},31:{t:0,h:0,o:0,b:0},32:{t:0,h:0,o:0,b:0},33:{t:0,h:0,o:0,b:0},34:{t:0,h:0,o:0,b:0},35:{t:0,h:0,o:0,b:0},36:{t:0,h:0,o:0,b:0},37:{t:0,h:0,o:0,b:0},38:{t:0,h:0,o:0,b:0},39:{t:0,h:0,o:0,b:0},40:{t:0,h:0,o:0,b:0},41:{t:0,h:0,o:0,b:0},42:{t:0,h:0,o:0,b:0},43:{t:0,h:0,o:0,b:0},44:{t:0,h:0,o:0,b:0},45:{t:0,h:0,o:0,b:0},46:{t:0,h:0,o:0,b:0},47:{t:0,h:0,o:0,b:0},48:{t:0,h:0,o:0,b:0},49:{t:0,h:0,o:0,b:0},50:{t:0,h:0,o:0,b:0},51:{t:0,h:0,o:0,b:0},52:{t:0,h:0,o:0,b:0},53:{t:0,h:0,o:0,b:0},54:{t:0,h:0,o:0,b:0},55:{t:0,h:0,o:0,b:0},56:{t:0,h:0,o:0,b:0},57:{t:0,h:0,o:0,b:0},58:{t:0,h:0,o:0,b:0},59:{t:0,h:0,o:0,b:0}},
    17:{0:{t:0,h:0,o:0,b:0},1:{t:0,h:0,o:0,b:0},2:{t:0,h:0,o:0,b:0},3:{t:0,h:0,o:0,b:0},4:{t:0,h:0,o:0,b:0},5:{t:0,h:0,o:0,b:0},6:{t:0,h:0,o:0,b:0},7:{t:0,h:0,o:0,b:0},8:{t:0,h:0,o:0,b:0},9:{t:0,h:0,o:0,b:0},10:{t:0,h:0,o:0,b:0},11:{t:0,h:0,o:0,b:0},12:{t:0,h:0,o:0,b:0},13:{t:0,h:0,o:0,b:0},14:{t:0,h:0,o:0,b:0},15:{t:0,h:0,o:0,b:0},16:{t:0,h:0,o:0,b:0},17:{t:0,h:0,o:0,b:0},18:{t:0,h:0,o:0,b:0},19:{t:0,h:0,o:0,b:0},20:{t:0,h:0,o:0,b:0},21:{t:0,h:0,o:0,b:0},22:{t:0,h:0,o:0,b:0},23:{t:0,h:0,o:0,b:0},24:{t:0,h:0,o:0,b:0},25:{t:0,h:0,o:0,b:0},26:{t:0,h:0,o:0,b:0},27:{t:0,h:0,o:0,b:0},28:{t:0,h:0,o:0,b:0},29:{t:0,h:0,o:0,b:0},30:{t:0,h:0,o:0,b:0},31:{t:0,h:0,o:0,b:0},32:{t:0,h:0,o:0,b:0},33:{t:0,h:0,o:0,b:0},34:{t:0,h:0,o:0,b:0},35:{t:0,h:0,o:0,b:0},36:{t:0,h:0,o:0,b:0},37:{t:0,h:0,o:0,b:0},38:{t:0,h:0,o:0,b:0},39:{t:0,h:0,o:0,b:0},40:{t:0,h:0,o:0,b:0},41:{t:0,h:0,o:0,b:0},42:{t:0,h:0,o:0,b:0},43:{t:0,h:0,o:0,b:0},44:{t:0,h:0,o:0,b:0},45:{t:0,h:0,o:0,b:0},46:{t:0,h:0,o:0,b:0},47:{t:0,h:0,o:0,b:0},48:{t:0,h:0,o:0,b:0},49:{t:0,h:0,o:0,b:0},50:{t:0,h:0,o:0,b:0},51:{t:0,h:0,o:0,b:0},52:{t:0,h:0,o:0,b:0},53:{t:0,h:0,o:0,b:0},54:{t:0,h:0,o:0,b:0},55:{t:0,h:0,o:0,b:0},56:{t:0,h:0,o:0,b:0},57:{t:0,h:0,o:0,b:0},58:{t:0,h:0,o:0,b:0},59:{t:0,h:0,o:0,b:0}},
    18:{0:{t:0,h:0,o:0,b:0},1:{t:0,h:0,o:0,b:0},2:{t:0,h:0,o:0,b:0},3:{t:0,h:0,o:0,b:0},4:{t:0,h:0,o:0,b:0},5:{t:0,h:0,o:0,b:0},6:{t:0,h:0,o:0,b:0},7:{t:0,h:0,o:0,b:0},8:{t:0,h:0,o:0,b:0},9:{t:0,h:0,o:0,b:0},10:{t:0,h:0,o:0,b:0},11:{t:0,h:0,o:0,b:0},12:{t:0,h:0,o:0,b:0},13:{t:0,h:0,o:0,b:0},14:{t:0,h:0,o:0,b:0},15:{t:0,h:0,o:0,b:0},16:{t:0,h:0,o:0,b:0},17:{t:0,h:0,o:0,b:0},18:{t:0,h:0,o:0,b:0},19:{t:0,h:0,o:0,b:0},20:{t:0,h:0,o:0,b:0},21:{t:0,h:0,o:0,b:0},22:{t:0,h:0,o:0,b:0},23:{t:0,h:0,o:0,b:0},24:{t:0,h:0,o:0,b:0},25:{t:0,h:0,o:0,b:0},26:{t:0,h:0,o:0,b:0},27:{t:0,h:0,o:0,b:0},28:{t:0,h:0,o:0,b:0},29:{t:0,h:0,o:0,b:0},30:{t:0,h:0,o:0,b:0},31:{t:0,h:0,o:0,b:0},32:{t:0,h:0,o:0,b:0},33:{t:0,h:0,o:0,b:0},34:{t:0,h:0,o:0,b:0},35:{t:0,h:0,o:0,b:0},36:{t:0,h:0,o:0,b:0},37:{t:0,h:0,o:0,b:0},38:{t:0,h:0,o:0,b:0},39:{t:0,h:0,o:0,b:0},40:{t:0,h:0,o:0,b:0},41:{t:0,h:0,o:0,b:0},42:{t:0,h:0,o:0,b:0},43:{t:0,h:0,o:0,b:0},44:{t:0,h:0,o:0,b:0},45:{t:0,h:0,o:0,b:0},46:{t:0,h:0,o:0,b:0},47:{t:0,h:0,o:0,b:0},48:{t:0,h:0,o:0,b:0},49:{t:0,h:0,o:0,b:0},50:{t:0,h:0,o:0,b:0},51:{t:0,h:0,o:0,b:0},52:{t:0,h:0,o:0,b:0},53:{t:0,h:0,o:0,b:0},54:{t:0,h:0,o:0,b:0},55:{t:0,h:0,o:0,b:0},56:{t:0,h:0,o:0,b:0},57:{t:0,h:0,o:0,b:0},58:{t:0,h:0,o:0,b:0},59:{t:0,h:0,o:0,b:0}},
    19:{0:{t:0,h:0,o:0,b:0},1:{t:0,h:0,o:0,b:0},2:{t:0,h:0,o:0,b:0},3:{t:0,h:0,o:0,b:0},4:{t:0,h:0,o:0,b:0},5:{t:0,h:0,o:0,b:0},6:{t:0,h:0,o:0,b:0},7:{t:0,h:0,o:0,b:0},8:{t:0,h:0,o:0,b:0},9:{t:0,h:0,o:0,b:0},10:{t:0,h:0,o:0,b:0},11:{t:0,h:0,o:0,b:0},12:{t:0,h:0,o:0,b:0},13:{t:0,h:0,o:0,b:0},14:{t:0,h:0,o:0,b:0},15:{t:0,h:0,o:0,b:0},16:{t:0,h:0,o:0,b:0},17:{t:0,h:0,o:0,b:0},18:{t:0,h:0,o:0,b:0},19:{t:0,h:0,o:0,b:0},20:{t:0,h:0,o:0,b:0},21:{t:0,h:0,o:0,b:0},22:{t:0,h:0,o:0,b:0},23:{t:0,h:0,o:0,b:0},24:{t:0,h:0,o:0,b:0},25:{t:0,h:0,o:0,b:0},26:{t:0,h:0,o:0,b:0},27:{t:0,h:0,o:0,b:0},28:{t:0,h:0,o:0,b:0},29:{t:0,h:0,o:0,b:0},30:{t:0,h:0,o:0,b:0},31:{t:0,h:0,o:0,b:0},32:{t:0,h:0,o:0,b:0},33:{t:0,h:0,o:0,b:0},34:{t:0,h:0,o:0,b:0},35:{t:0,h:0,o:0,b:0},36:{t:0,h:0,o:0,b:0},37:{t:0,h:0,o:0,b:0},38:{t:0,h:0,o:0,b:0},39:{t:0,h:0,o:0,b:0},40:{t:0,h:0,o:0,b:0},41:{t:0,h:0,o:0,b:0},42:{t:0,h:0,o:0,b:0},43:{t:0,h:0,o:0,b:0},44:{t:0,h:0,o:0,b:0},45:{t:0,h:0,o:0,b:0},46:{t:0,h:0,o:0,b:0},47:{t:0,h:0,o:0,b:0},48:{t:0,h:0,o:0,b:0},49:{t:0,h:0,o:0,b:0},50:{t:0,h:0,o:0,b:0},51:{t:0,h:0,o:0,b:0},52:{t:0,h:0,o:0,b:0},53:{t:0,h:0,o:0,b:0},54:{t:0,h:0,o:0,b:0},55:{t:0,h:0,o:0,b:0},56:{t:0,h:0,o:0,b:0},57:{t:0,h:0,o:0,b:0},58:{t:0,h:0,o:0,b:0},59:{t:0,h:0,o:0,b:0}},
    20:{0:{t:0,h:0,o:0,b:0},1:{t:0,h:0,o:0,b:0},2:{t:0,h:0,o:0,b:0},3:{t:0,h:0,o:0,b:0},4:{t:0,h:0,o:0,b:0},5:{t:0,h:0,o:0,b:0},6:{t:0,h:0,o:0,b:0},7:{t:0,h:0,o:0,b:0},8:{t:0,h:0,o:0,b:0},9:{t:0,h:0,o:0,b:0},10:{t:0,h:0,o:0,b:0},11:{t:0,h:0,o:0,b:0},12:{t:0,h:0,o:0,b:0},13:{t:0,h:0,o:0,b:0},14:{t:0,h:0,o:0,b:0},15:{t:0,h:0,o:0,b:0},16:{t:0,h:0,o:0,b:0},17:{t:0,h:0,o:0,b:0},18:{t:0,h:0,o:0,b:0},19:{t:0,h:0,o:0,b:0},20:{t:0,h:0,o:0,b:0},21:{t:0,h:0,o:0,b:0},22:{t:0,h:0,o:0,b:0},23:{t:0,h:0,o:0,b:0},24:{t:0,h:0,o:0,b:0},25:{t:0,h:0,o:0,b:0},26:{t:0,h:0,o:0,b:0},27:{t:0,h:0,o:0,b:0},28:{t:0,h:0,o:0,b:0},29:{t:0,h:0,o:0,b:0},30:{t:0,h:0,o:0,b:0},31:{t:0,h:0,o:0,b:0},32:{t:0,h:0,o:0,b:0},33:{t:0,h:0,o:0,b:0},34:{t:0,h:0,o:0,b:0},35:{t:0,h:0,o:0,b:0},36:{t:0,h:0,o:0,b:0},37:{t:0,h:0,o:0,b:0},38:{t:0,h:0,o:0,b:0},39:{t:0,h:0,o:0,b:0},40:{t:0,h:0,o:0,b:0},41:{t:0,h:0,o:0,b:0},42:{t:0,h:0,o:0,b:0},43:{t:0,h:0,o:0,b:0},44:{t:0,h:0,o:0,b:0},45:{t:0,h:0,o:0,b:0},46:{t:0,h:0,o:0,b:0},47:{t:0,h:0,o:0,b:0},48:{t:0,h:0,o:0,b:0},49:{t:0,h:0,o:0,b:0},50:{t:0,h:0,o:0,b:0},51:{t:0,h:0,o:0,b:0},52:{t:0,h:0,o:0,b:0},53:{t:0,h:0,o:0,b:0},54:{t:0,h:0,o:0,b:0},55:{t:0,h:0,o:0,b:0},56:{t:0,h:0,o:0,b:0},57:{t:0,h:0,o:0,b:0},58:{t:0,h:0,o:0,b:0},59:{t:0,h:0,o:0,b:0}},
    21:{0:{t:0,h:0,o:0,b:0},1:{t:0,h:0,o:0,b:0},2:{t:0,h:0,o:0,b:0},3:{t:0,h:0,o:0,b:0},4:{t:0,h:0,o:0,b:0},5:{t:0,h:0,o:0,b:0},6:{t:0,h:0,o:0,b:0},7:{t:0,h:0,o:0,b:0},8:{t:0,h:0,o:0,b:0},9:{t:0,h:0,o:0,b:0},10:{t:0,h:0,o:0,b:0},11:{t:0,h:0,o:0,b:0},12:{t:0,h:0,o:0,b:0},13:{t:0,h:0,o:0,b:0},14:{t:0,h:0,o:0,b:0},15:{t:0,h:0,o:0,b:0},16:{t:0,h:0,o:0,b:0},17:{t:0,h:0,o:0,b:0},18:{t:0,h:0,o:0,b:0},19:{t:0,h:0,o:0,b:0},20:{t:0,h:0,o:0,b:0},21:{t:0,h:0,o:0,b:0},22:{t:0,h:0,o:0,b:0},23:{t:0,h:0,o:0,b:0},24:{t:0,h:0,o:0,b:0},25:{t:0,h:0,o:0,b:0},26:{t:0,h:0,o:0,b:0},27:{t:0,h:0,o:0,b:0},28:{t:0,h:0,o:0,b:0},29:{t:0,h:0,o:0,b:0},30:{t:0,h:0,o:0,b:0},31:{t:0,h:0,o:0,b:0},32:{t:0,h:0,o:0,b:0},33:{t:0,h:0,o:0,b:0},34:{t:0,h:0,o:0,b:0},35:{t:0,h:0,o:0,b:0},36:{t:0,h:0,o:0,b:0},37:{t:0,h:0,o:0,b:0},38:{t:0,h:0,o:0,b:0},39:{t:0,h:0,o:0,b:0},40:{t:0,h:0,o:0,b:0},41:{t:0,h:0,o:0,b:0},42:{t:0,h:0,o:0,b:0},43:{t:0,h:0,o:0,b:0},44:{t:0,h:0,o:0,b:0},45:{t:0,h:0,o:0,b:0},46:{t:0,h:0,o:0,b:0},47:{t:0,h:0,o:0,b:0},48:{t:0,h:0,o:0,b:0},49:{t:0,h:0,o:0,b:0},50:{t:0,h:0,o:0,b:0},51:{t:0,h:0,o:0,b:0},52:{t:0,h:0,o:0,b:0},53:{t:0,h:0,o:0,b:0},54:{t:0,h:0,o:0,b:0},55:{t:0,h:0,o:0,b:0},56:{t:0,h:0,o:0,b:0},57:{t:0,h:0,o:0,b:0},58:{t:0,h:0,o:0,b:0},59:{t:0,h:0,o:0,b:0}},
    22:{0:{t:0,h:0,o:0,b:0},1:{t:0,h:0,o:0,b:0},2:{t:0,h:0,o:0,b:0},3:{t:0,h:0,o:0,b:0},4:{t:0,h:0,o:0,b:0},5:{t:0,h:0,o:0,b:0},6:{t:0,h:0,o:0,b:0},7:{t:0,h:0,o:0,b:0},8:{t:0,h:0,o:0,b:0},9:{t:0,h:0,o:0,b:0},10:{t:0,h:0,o:0,b:0},11:{t:0,h:0,o:0,b:0},12:{t:0,h:0,o:0,b:0},13:{t:0,h:0,o:0,b:0},14:{t:0,h:0,o:0,b:0},15:{t:0,h:0,o:0,b:0},16:{t:0,h:0,o:0,b:0},17:{t:0,h:0,o:0,b:0},18:{t:0,h:0,o:0,b:0},19:{t:0,h:0,o:0,b:0},20:{t:0,h:0,o:0,b:0},21:{t:0,h:0,o:0,b:0},22:{t:0,h:0,o:0,b:0},23:{t:0,h:0,o:0,b:0},24:{t:0,h:0,o:0,b:0},25:{t:0,h:0,o:0,b:0},26:{t:0,h:0,o:0,b:0},27:{t:0,h:0,o:0,b:0},28:{t:0,h:0,o:0,b:0},29:{t:0,h:0,o:0,b:0},30:{t:0,h:0,o:0,b:0},31:{t:0,h:0,o:0,b:0},32:{t:0,h:0,o:0,b:0},33:{t:0,h:0,o:0,b:0},34:{t:0,h:0,o:0,b:0},35:{t:0,h:0,o:0,b:0},36:{t:0,h:0,o:0,b:0},37:{t:0,h:0,o:0,b:0},38:{t:0,h:0,o:0,b:0},39:{t:0,h:0,o:0,b:0},40:{t:0,h:0,o:0,b:0},41:{t:0,h:0,o:0,b:0},42:{t:0,h:0,o:0,b:0},43:{t:0,h:0,o:0,b:0},44:{t:0,h:0,o:0,b:0},45:{t:0,h:0,o:0,b:0},46:{t:0,h:0,o:0,b:0},47:{t:0,h:0,o:0,b:0},48:{t:0,h:0,o:0,b:0},49:{t:0,h:0,o:0,b:0},50:{t:0,h:0,o:0,b:0},51:{t:0,h:0,o:0,b:0},52:{t:0,h:0,o:0,b:0},53:{t:0,h:0,o:0,b:0},54:{t:0,h:0,o:0,b:0},55:{t:0,h:0,o:0,b:0},56:{t:0,h:0,o:0,b:0},57:{t:0,h:0,o:0,b:0},58:{t:0,h:0,o:0,b:0},59:{t:0,h:0,o:0,b:0}},
    23:{0:{t:0,h:0,o:0,b:0},1:{t:0,h:0,o:0,b:0},2:{t:0,h:0,o:0,b:0},3:{t:0,h:0,o:0,b:0},4:{t:0,h:0,o:0,b:0},5:{t:0,h:0,o:0,b:0},6:{t:0,h:0,o:0,b:0},7:{t:0,h:0,o:0,b:0},8:{t:0,h:0,o:0,b:0},9:{t:0,h:0,o:0,b:0},10:{t:0,h:0,o:0,b:0},11:{t:0,h:0,o:0,b:0},12:{t:0,h:0,o:0,b:0},13:{t:0,h:0,o:0,b:0},14:{t:0,h:0,o:0,b:0},15:{t:0,h:0,o:0,b:0},16:{t:0,h:0,o:0,b:0},17:{t:0,h:0,o:0,b:0},18:{t:0,h:0,o:0,b:0},19:{t:0,h:0,o:0,b:0},20:{t:0,h:0,o:0,b:0},21:{t:0,h:0,o:0,b:0},22:{t:0,h:0,o:0,b:0},23:{t:0,h:0,o:0,b:0},24:{t:0,h:0,o:0,b:0},25:{t:0,h:0,o:0,b:0},26:{t:0,h:0,o:0,b:0},27:{t:0,h:0,o:0,b:0},28:{t:0,h:0,o:0,b:0},29:{t:0,h:0,o:0,b:0},30:{t:0,h:0,o:0,b:0},31:{t:0,h:0,o:0,b:0},32:{t:0,h:0,o:0,b:0},33:{t:0,h:0,o:0,b:0},34:{t:0,h:0,o:0,b:0},35:{t:0,h:0,o:0,b:0},36:{t:0,h:0,o:0,b:0},37:{t:0,h:0,o:0,b:0},38:{t:0,h:0,o:0,b:0},39:{t:0,h:0,o:0,b:0},40:{t:0,h:0,o:0,b:0},41:{t:0,h:0,o:0,b:0},42:{t:0,h:0,o:0,b:0},43:{t:0,h:0,o:0,b:0},44:{t:0,h:0,o:0,b:0},45:{t:0,h:0,o:0,b:0},46:{t:0,h:0,o:0,b:0},47:{t:0,h:0,o:0,b:0},48:{t:0,h:0,o:0,b:0},49:{t:0,h:0,o:0,b:0},50:{t:0,h:0,o:0,b:0},51:{t:0,h:0,o:0,b:0},52:{t:0,h:0,o:0,b:0},53:{t:0,h:0,o:0,b:0},54:{t:0,h:0,o:0,b:0},55:{t:0,h:0,o:0,b:0},56:{t:0,h:0,o:0,b:0},57:{t:0,h:0,o:0,b:0},58:{t:0,h:0,o:0,b:0},59:{t:0,h:0,o:0,b:0}}
  }
    };
    dbo.collection("try").insert(structure,function(err, res){
      if (err) throw err;
      console.log("Basic Document Created!");
      db.close();
    });
});
}

//function for inserting random data in the document 
function insertRand()
{
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27017/";
  
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("try");
    var myquery={
      "create_on" : new Date("2019-03-26T18:46:02.577Z")
    };

    var newvalues={
      $push: {
        t:Math.random()*100,
        h:Math.random()*50,
        o:Math.random()*40,
        b:Math.random()*120
      }
    };
    dbo.collection("try").update(myquery,newvalues, function(err, res) {
      if (err) throw err;
      console.log("1 Value inserted");
      db.close();
    });
  });
}


function search()
{
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27017/";
  
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log('Connected');
    var dbo = db.db("try");
  
    dbo.collection("try").coun
  });
}



insertRand();