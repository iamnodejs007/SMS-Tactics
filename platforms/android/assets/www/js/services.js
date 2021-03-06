angular.module('starter.services', [])

.service('Words', function() {

words = [

{word:["ok","k","o.k.","okay"]},
{word:["no","naw","nay"]},
{word:["omg","omfg","god","gawd","omfgf"]},
{word:["because","cause","'cause"]},
{word:["about","abouts"]},
{word:["at","@"]},
{word:["can"]},
{word:["could","coulda","couldof","couldn’t"]},
{word:["in","within","inside","into","inner"]},
{word:["want","wanna","wana","wnt"]},
{word:["lol","laugh out loud","bahaha","haha","ahaha","hah"]},
{word:["sup","what's up","what up","wat up","wats up","wut up"]},
{word:["on","onto","onward"]},
{word:["have","haves"]},
{word:["for","fer"]},
{word:["not","naught"]},
{word:["on","onward"]},
{word:["with","w/"]},
{word:["he","he's","hes"]},
{word:["you","u"]},
{word:["from"]},
{word:["they","they're"]},
{word:["we","we'd"]},
{word:["say","saying","says"]},
{word:["or","ors"]},
{word:["will","wills"]},
{word:["my","mine"]},
{word:["one","1","uno","ones"]},
{word:["all"]},
{word:["would","woulda","wouldof"]},
{word:["there"]},
{word:["what","wha","wtf"]},
{word:["so","soso"]},
{word:["up","ups","upped"]},
{word:["out","outa","outs","outing"]},
{word:["if","ifs","iff"]},
{word:["who","whom","whose"]},
{word:["get","gets","got"]},
{word:["which"]},
{word:["go","goes","going","gone"]},
{word:["me","mes","mee","meee","meeee"]},
{word:["when"]},
{word:["make","makes","made","making"]},
{word:["like","likes","liked","liking"]},
{word:["time","times","timed","timing"]},
{word:["just","justs","justa"]},
{word:["him","his"]},
{word:["know","knew","known","knowing"]},
{word:["take","took","takes","taken"]},
{word:["people","ppl","peoples","peeps"]},
{word:["year","years"]},
{word:["good","goods","goody","goodie"]},
{word:["some"]},
{word:["them","thems"]},
{word:["see","sees","seen","saw"]},
{word:["other","others"]},
{word:["then","than"]},
{word:["now"]},
{word:["look","looks","looked","looking"]},
{word:["only"]},
{word:["come","comes","came","coming"]},
{word:["over","overs","gameover"]},
{word:["think","thought","thinks","thinking"]},
{word:["also"]},
{word:["back","backed","backing","backs"]},
{word:["after","afters"]},
{word:["use","using","used","uses"]},
{word:["two","2","duo"]},
{word:["how","how'd","hows"]},
{word:["our","ours"]},
{word:["work","working","worked","works"]},
{word:["first","firsts"]},
{word:["well","wells","welp"]},
{word:["way","ways"]},
{word:["even","evens","evened"]},
{word:["date","dates","dating","dater"]},
{word:["sorry","sorriest"]},
{word:["run","runs","ran","running"]},
{word:["hide","hid","hides","hidden"]},
{word:["new"]},
{word:["any","anything"]},
{word:["these"]},
{word:["give","gave","given","gives"]},
{word:["day","days","daylight","daytime"]},
{word:["most"]},
{word:["more"]},
{word:["find","finds","found","finding"]},
{word:["here"]},
{word:["thing"]},
{word:["many"]},
{word:["those"]},
{word:["tell","tells","told","telling"]},
{word:["very","vary"]},
{word:["through"]},
{word:["us"]},
{word:["life","lives","lived"]},
{word:["child","children"]},
{word:["down","downs"]},
{word:["may"]},
{word:["should","shoulda"]},
{word:["call","called","calling","calls"]},
{word:["world","worlds"]},
{word:["school","schools","schooling","schooled"]},
{word:["still"]},
{word:["try","tries","tried","trying"]},
{word:["last","lasted","lats","lasting"]},
{word:["ask","ask","asking","asked"]},
{word:["need","needs","needed","needing"]},
{word:["too"]},
{word:["feel","feels","feeling","felt"]},
{word:["three","3","tres","threes"]},
{word:["state","states","stated","stating"]},
{word:["never","nevers"]},
{word:["become","becoming","became","becomes"]},
{word:["between"]},
{word:["high","highs","height","highest","higher"]},
{word:["really"]},
{word:["something","somethings"]},
{word:["another","'nother"]},
{word:["much"]},
{word:["family","families"]},
{word:["own","owned","owns","owning"]},
{word:["leave","leaving","leaves","left"]},
{word:["put","puts","putting"]},
{word:["old","older","olds"]},
{word:["while","whilst"]},
{word:["mean","meaner","meanest"]},
{word:["keep","kept","keeping","keeper","keeps"]},
{word:["student","students"]},
{word:["happy","happier","happiest"]},
{word:["why"]},
{word:["let","puts","lets"]},
{word:["great","greats"]},
{word:["same","sames"]},
{word:["big","bigs"]},
{word:["group","groups","grouped","grouping"]},
{word:["begin","begins","began","beginning","beginnings"]},
{word:["seem","seemed","seems"]},
{word:["country","countries"]},
{word:["help","helps","helped","helping"]},
{word:["talk","talking","talk","talks"]},
{word:["where"]},
{word:["turn","turns","turned","turning"]},
{word:["problem","problems"]},
{word:["every"]},
{word:["start","starts","starting","started"]},
{word:["hand","hands","handed"]},
{word:["might","mights","mighty","mightiest"]},
{word:["American","americans","america","americas"]},
{word:["show","showing","showed"]},
{word:["part","parting","parted","parts"]},
{word:["against"]},
{word:["place","placed","places","placing"]},
{word:["such","assuch"]},
{word:["again","andagain"]},
{word:["few","fewest"]},
{word:["case","cases","casing","cased"]},
{word:["week","weekend","weeks"]},
{word:["company","companies"]},
{word:["system","systems","systematic"]},
{word:["each"]},
{word:["right","rights","rought"]},
{word:["program","programs","programmed","programming"]},
{word:["hear","heard","hears","hearing"]},
{word:["question","questions","questioning","questioned"]},
{word:["during"]},
{word:["play","plays","played","playing"]},
{word:["government","governments"]},
{word:["run","running","runs","ran"]},
{word:["small","smalls"]},
{word:["number","numbers","numbered","numbering"]},
{word:["off","offing","offs"]},
{word:["always","allways"]},
{word:["move","moves","moved","moving"]},
{word:["night","nights","g'night","goodnight"]},
{word:["live","lives"]},
{word:["Mr","mister"]},
{word:["point","points","pointed","pointing"]},
{word:["believe","belives","believed","believes"]},
{word:["hold","holds","holding","held"]},
{word:["today"]},
{word:["bring","brings","bringing","brought"]},
{word:["happen","happened","happening","happens"]},
{word:["next"]},
{word:["without"]},
{word:["before"]},
{word:["large","larges"]},
{word:["million","millions","millionaire","millionaires"]},
{word:["must"]},
{word:["home","homes","homey"]},
{word:["under","underwater","underwear","underneath"]},
{word:["water","waters","watered","watering"]},
{word:["room","roomy","rooms"]},
{word:["write","writes","wrote","writing"]},
{word:["mother","mothers","mothered","mothering"]},
{word:["area","areas"]},
{word:["national","nationals","nationality"]},
{word:["money","moneys","monies"]},
{word:["story","stories","storied"]},
{word:["young","youth","youths","youngs"]},
{word:["fact","facts","factoid"]},
{word:["month","months"]},
{word:["different","difference","differences"]},
{word:["lot","lots","alot"]},
{word:["study","studies","studying"]},
{word:["book","books","booked","booking"]},
{word:["eye","eyes","eyeing"]},
{word:["job","jobs"]},
{word:["though","though","although"]},
{word:["business","buisnesses","buisness","businesses"]},
{word:["issue","issues"]},
{word:["side","sides","siding","sided"]},
{word:["kind","kinds"]},
{word:["four","4","fours","4s"]},
{word:["head","heads","headed","heading"]},
{word:["far"]},
{word:["black","blacks","blackened","blacking"]},
{word:["long","longs","longing","longed"]},
{word:["both"]},
{word:["little"]},
{word:["house","houses","housed"]},
{word:["since"]},
{word:["provide","provides","provided","providing"]},
{word:["service","services","serviced","servicing"]},
{word:["around"]},
{word:["friend","friends","friended"]},
{word:["important","importance"]},
{word:["father","fathers"]},
{word:["sit","sitting","sits","sat"]},
{word:["away","aways"]},
{word:["until"]},
{word:["power","powers","powered","powering"]},
{word:["hour","hours"]},
{word:["game","games","gamed","gaming"]},
{word:["often"]},
{word:["line","lined","lines"]},
{word:["politics","political"]},
{word:["end","ends","ending","ended"]},
{word:["among","amongst"]},
{word:["ever","forever"]},
{word:["stand","standing","stands"]},
{word:["bad"]},
{word:["lose","lost","losing"]},
{word:["member","members"]},
{word:["pay","pays","paying","payer","taxpayer"]},
{word:["law","laws"]},
{word:["meet","meets","meeting"]},
{word:["car","cars"]},
{word:["city","cities"]},
{word:["almost"]},
{word:["include","includes"]},
{word:["continue","continues"]},
{word:["set","sets"]},
{word:["later"]},
{word:["community","communities"]},
{word:["name","names","named","naming"]},
{word:["five","5","fives","5s"]},
{word:["white","whites"]},
{word:["least"]},
{word:["president","presidents","presidential"]},
{word:["learn","learns","learned"]},
{word:["real","reals","4real"]},
{word:["change","changes","changing","changer"]},
{word:["team","teams"]},
{word:["minute","minutes"]},
{word:["best","bests"]},
{word:["several"]},
{word:["idea","ideas"]},
{word:["kid","kids","kidder"]},
{word:["body","bodies"]},
{word:["information","info"]},
{word:["nothing"]},
{word:["lead","leads","leading"]},
{word:["social","socialite"]},
{word:["understand","understanding","understands"]},
{word:["watch","watches","watching","watcher"]},
{word:["together"]},
{word:["follow","follows","following"]},
{word:["parent","parents","parenting"]},
{word:["stop","stops","stopper"]},
{word:["face","faced","faces"]},
{word:["create","creates","created"]},
{word:["public","publics"]},
{word:["already"]},
{word:["speak","speaks"]},
{word:["read","reads","reading","reader"]},
{word:["level","levels","leveler"]},
{word:["allow","allows","allowance"]},
{word:["add","adds","adding","adder"]},
{word:["office","offices"]},
{word:["spend","spent","spending","spender"]},
{word:["door","doors"]},
{word:["health","healthy"]},
{word:["person","persons"]},
{word:["art","artist","artsy","arty"]},
{word:["sure"]},
{word:["war","wars"]},
{word:["history","histories"]},
{word:["party","parties"]},
{word:["grow","growing","grows"]},
{word:["result","results","resulting"]},
{word:["open","opens","opening"]},
{word:["morning","mornings"]},
{word:["walk","walks","walking"]},
{word:["reason","reasons","reasoning"]},
{word:["low","lows"]},
{word:["win","wins","winning"]},
{word:["research","researching"]},
{word:["girl","girls"]},
{word:["guy","guys"]},
{word:["early","earlier"]},
{word:["food","foods","foodie"]},
{word:["moment","moments"]},
{word:["air","airs"]},
{word:["teacher","teachers"]},
{word:["force","forces"]},
{word:["offer","offers"]},
{word:["enough"]},
{word:["education","educational"]},
{word:["remember","remembers"]},
{word:["foot","feet"]},
{word:["second","seconds"]},
{word:["boy","boys","boyhood"]},
{word:["maybe"]},
{word:["toward","towards"]},
{word:["able"]},
{word:["age","ages","aging"]},
{word:["policy","policies"]},
{word:["everything"]},
{word:["love","loving"]},
{word:["process","processes"]},
{word:["music","musical"]},
{word:["including","include"]},
{word:["consider","considering"]},
{word:["appear","appears"]},
{word:["actually"]},
{word:["buy","buys"]},
{word:["probably","probs","prolly","probly"]},
{word:["human","humans"]},
{word:["wait","waits","waiting"]},
{word:["serve","serves","serving"]},
{word:["market","markets"]},
{word:["die","dies"]},
{word:["send","sends"]},
{word:["expect","expects","expecting"]},
{word:["sense","senses"]},
{word:["build","builds","building"]},
{word:["stay","stays","staying"]},
{word:["fall","falls","fell"]},
{word:["plan","plans","planned","planning"]},
{word:["cut","cuts"]},
{word:["college","colleges"]},
{word:["interest","interests"]},
{word:["death","deaths","dying"]},
{word:["course","courses"]},
{word:["someone"]},
{word:["experience","experiences"]},
{word:["behind"]},
{word:["reach","reaches"]},
{word:["local","locals"]},
{word:["kill","kills"]},
{word:["six","sixes"]},
{word:["remain","remains"]},
{word:["effect","effects"]},
{word:["suggest","suggests","suggesting"]},
{word:["class","classes"]},
{word:["control","controls","controlling"]},
{word:["raise","raises"]},
{word:["care","cares","caring"]},
{word:["late","later"]},
{word:["hard"]},
{word:["field","fields"]},
{word:["pass","passing","passes"]},
{word:["sell","sells","selling"]},
{word:["major","majors"]},
{word:["sometimes","sometime"]},
{word:["require","requires","required"]},
{word:["along"]},
{word:["develop","developed","development","developing"]},
{word:["report","reports"]},
{word:["role","roles"]},
{word:["better","betters"]},
{word:["effort","efforts"]},
{word:["decide","decides","deciding"]},
{word:["rate","rates","rating"]},
{word:["strong","strength"]},
{word:["possible","possibility"]},
{word:["heart","hearts","heartache"]},
{word:["drug","drugs"]},
{word:["leader","leaders"]},
{word:["light","lights"]},
{word:["voice","voices"]},
{word:["wife","wives"]},
{word:["police"]},
{word:["mind","minds"]},
{word:["bible, bibles"]},
{word:["pull","pulls"]},
{word:["return","returns"]},
{word:["free","frees"]},
{word:["price","prices"]},
{word:["less"]},
{word:["decision","decisions"]},
{word:["explain","explanation","explains"]},
{word:["son","sons"]},
{word:["hope","hopes","hoped","hoping"]},
{word:["view","views","viewed"]},
{word:["relationship","relationships"]},
{word:["carry","carries","carried"]},
{word:["town","towns"]},
{word:["road","roads"]},
{word:["drive","drives","driven","driver","drivers"]},
{word:["arm","arms"]},
{word:["true","truth"]},
{word:["break","breaks","breaking"]},
{word:["difference","differences"]},
{word:["thank","thanks","thankyou"]},
{word:["receive","receives"]},
{word:["value","values","valued"]},
{word:["international","int'l","internationals"]},
{word:["building","buildings"]},
{word:["action","actions"]},
{word:["full","filled","fills"]},
{word:["model","models"]},
{word:["join","joins"]},
{word:["season","seasons"]},
{word:["society","societies"]},
{word:["tax","taxes"]},
{word:["director","directors"]},
{word:["position","positions","positioned"]},
{word:["player","players"]},
{word:["agree","agreed","agrees","agreeing","agreement"]},
{word:["especially"]},
{word:["record","recording","records"]},
{word:["pick","picks","picking"]},
{word:["wear","wears"]},
{word:["paper","papers"]},
{word:["special","specials","specialty"]},
{word:["space","spaces","spaced"]},
{word:["ground","grounds","grounding"]},
{word:["form","forms","formed","forming"]},
{word:["support","supports","supporting","supported"]},
{word:["event","events"]},
{word:["official","officials"]},
{word:["matter","matters"]},
{word:["everyone","everyones"]},
{word:["center","centers","centered","centering"]},
{word:["couple","couples"]},
{word:["site","sites"]},
{word:["project","projects"]},
{word:["hit","hits","hitting"]},
{word:["base","bases"]},
{word:["activity","activities"]},
{word:["star","stars","starlight"]},
{word:["table","tables"]},
{word:["court","courts","courting"]},
{word:["produce","produces","producer"]},
{word:["eat","eats","eating","ate"]},
{word:["teach","teaching","teacher","teachers"]},
{word:["half","1/2","halfs"]},
{word:["situation","sitch","situations"]},
{word:["easy","easier","easiest"]},
{word:["cost","costs","costing"]},
{word:["figure","figuring","figures"]},
{word:["street","streets"]},
{word:["image","images","imaging"]},
{word:["phone","phones","cellphone","cellphones"]},
{word:["either","neither"]},
{word:["data","datas"]},
{word:["cover","covers"]},
{word:["quite","quites"]},
{word:["picture","pictures"]},
{word:["clear","clears","cleared","clearing"]},
{word:["practice","practices","practiced","practicing"]},
{word:["piece","pieces","pieced"]},
{word:["land","lands"]},
{word:["recent"]},
{word:["describe","describes","described","describing"]},
{word:["product","products"]},
{word:["doctor","doctors"]},
{word:["wall","walls"]},
{word:["patient","patients"]},
{word:["news"]},
{word:["test","tests"]},
{word:["movie","movies"]},
{word:["certain","certainly","forcertain"]},
{word:["north","northwest","northeast","norths"]},
{word:["personal","personals","personally"]},
{word:["simple","simply"]},
{word:["third","3rd","thirds","1/3"]},
{word:["technology","tech","technologies","techs"]},
{word:["catch","catches"]},
{word:["step","steps","stepping","stepped"]},
{word:["baby","babies","bae"]},
{word:["computer","computers"]},
{word:["type","types"]},
{word:["attention","attentions"]},
{word:["draw","draws"]},
{word:["film","films"]},
{word:["Republican","republicans"]},
{word:["tree","trees"]},
{word:["source","sources"]},
{word:["red","reds"]},
{word:["near","nearly"]},
{word:["organization","org","organizations"]},
{word:["cause","causes"]},
{word:["hair","hairs"]},
{word:["century","centuries"]},
{word:["evidence"]},
{word:["window","windows"]},
{word:["difficult","difficulty"]},
{word:["listen","listens"]},
{word:["soon"]},
{word:["culture","cultures"]},
{word:["billion","billions"]},
{word:["chance","chances"]},
{word:["brother","brothers"]},
{word:["energy","energies"]},
{word:["period","periods"]},
{word:["summer","summers"]},
{word:["realize","realization","realizes"]},
{word:["hundred","hundreds"]},
{word:["available","availability"]},
{word:["plant","plants"]},
{word:["opportunity","opportunities"]},
{word:["term","terms","shorterm"]},
{word:["short","shorts"]},
{word:["letter","letters"]},
{word:["condition","conditions"]},
{word:["choice","choices","chooses","choose"]},
{word:["single","singles"]},
{word:["rule","rules"]},
{word:["daughter","daughters"]},
{word:["administration","admin","administration"]},
{word:["south","southern"]},
{word:["husband","husbands"]},
{word:["floor","floors"]},
{word:["campaign","campaigns"]},
{word:["material","materials"]},
{word:["medical","medicine"]},
{word:["hospital","hospitals"]},
{word:["church","churches"]},
{word:["close","closes"]},
{word:["thousand","thousands"]},
{word:["risk","risks"]},
{word:["current","currents"]},
{word:["fire","fires"]},
{word:["future","futures"]},
{word:["wrong","wrongs"]},
{word:["involve","involves"]},
{word:["defense","defend","defenses"]},
{word:["anyone"]},
{word:["increase","increases"]},
{word:["security","securities"]},
{word:["bank","banks"]},
{word:["west","northwest","southwest","wests"]},
{word:["sport","sports"]},
{word:["board","boards"]},
{word:["seek","seeks"]},
{word:["subject","subjects"]},
{word:["private","privates"]},
{word:["rest","rests"]},
{word:["behavior","behaviors"]},
{word:["deal","deals"]},
{word:["performance","performances"]},
{word:["fight","fights"]},
{word:["throw","throws"]},
{word:["top","tops"]},
{word:["quick","quickly","quickened"]},
{word:["past","pasts"]},
{word:["goal","goals"]},
{word:["bed","beds"]},
{word:["order","orders","ordered","oredring"]},
{word:["author","authors"]},
{word:["represent","represents","representing","represented"]},
{word:["focus","focuses","focused","focusing"]},
{word:["foreign","foreigns"]},
{word:["drop","drops"]},
{word:["blood","bloody","bloodsoaked","bloods"]},
{word:["push","pushes","pushy"]},
{word:["nature","natures","goodnatured","natured"]},
{word:["color","colors","coloring","colored"]},
{word:["store","stored","stores","storing"]},
{word:["reduce","reduces","reduced","reducing"]},
{word:["sound","sounds","sounding"]},
{word:["note","notes"]},
{word:["fine","fines","fined"]},
{word:["movement","movements"]},
{word:["page","pages","paged"]},
{word:["enter","enters","entered","entering"]},
{word:["share","shares","sharing","shared"]},
{word:["common","commons"]},
{word:["poor","poors"]},
{word:["natural","naturals"]},
{word:["race","races","raced"]},
{word:["concern","concerns","concerned"]},
{word:["similar","similarly"]},
{word:["hot","hots"]},
{word:["language","languages"]},
{word:["usually"]},
{word:["response","responses","respond"]},
{word:["dead","died"]},
{word:["rise","rose"]},
{word:["animal","animals"]},
{word:["factor","factors"]},
{word:["article","articles"]},
{word:["shoot","shoots"]},
{word:["east","northeast","southeast","easts"]},
{word:["save","saves","saved","saving","savings"]},
{word:["seven","7","seventh","sevens","7th"]},
{word:["scene","scenes"]},
{word:["stock","stocks"]},
{word:["career","careers"]},
{word:["eight","8","eighth","8th","eights"]},
{word:["treatment","treatments"]},
{word:["beyond"]},
{word:["protect","protects"]},
{word:["approach","approaches","approached","approaching"]},
{word:["lie","lies","liar","lied","lying"]},
{word:["size","sizes","sized","sizes"]},
{word:["dog","dogs"]},
{word:["fund","funds"]},
{word:["serious","seriously","seriousness","srsly"]},
{word:["ready","readies"]},
{word:["sign","signs"]},
{word:["thought","thoughts"]},
{word:["list","lists"]},
{word:["quality","qualities"]},
{word:["pressure","pressures"]},
{word:["accept","accepts"]},
{word:["answer","answers"]},
{word:["resource","resources"]},
{word:["left","lefts"]},
{word:["meeting","meetings"]},
{word:["determine","determining"]},
{word:["prepare","prepares"]},
{word:["disease","diseases"]},
{word:["whatever","w/e","w.e."]},
{word:["success","successes"]},
{word:["argue","argues"]},
{word:["amount","amounts"]},
{word:["ability","abilities"]},
{word:["staff","staffs"]},
{word:["recognize","recognizes"]},
{word:["indicate","indicates"]},
{word:["character","characters"]},
{word:["loss","losses"]},
{word:["degree","degrees"]},
{word:["wonder","wonders"]},
{word:["attack","attacks"]},
{word:["television","tv","t.v."]},
{word:["box","boxes","boxed","boxing"]},
{word:["train","training","trained","trains"]},
{word:["pretty"]},
{word:["trade","trades"]},
{word:["election","elections"]},
{word:["everybody","everyone"]},
{word:["general","generalization"]},
{word:["standard","standards"]},
{word:["message","messages","messaging"]},
{word:["fail","fails","failing","failed"]},
{word:["outside"]},
{word:["arrive","arrives","arrived"]},
{word:["benefit","benefits","beneficial"]},
{word:["forward","forwards","forwarding"]},
{word:["lawyer","lawyers"]},
{word:["present","presents"]},
{word:["section","sections"]},
{word:["glass","glasses"]},
{word:["skill","skills"]},
{word:["sister","sisters"]},
{word:["PM"]},
{word:["professor","professors"]},
{word:["operation","operations"]},
{word:["crime","crimes"]},
{word:["stage","staged","stages"]},
{word:["compare","compares","compared"]},
{word:["miss","misses","missed"]},
{word:["design","designed","designs","designing"]},
{word:["sort","sorts","sorting","sorted"]},
{word:["act","acted","acts","acting"]},
{word:["ten","tens","10","10th","tenth"]},
{word:["gun","guns","gunned"]},
{word:["station","stations","stationed"]},
{word:["blue","blues"]},
{word:["strategy","strategies"]},
{word:["discuss","discusses"]},
{word:["song","songs"]},
{word:["example","examples"]},
{word:["check","checks","checked","checking"]},
{word:["leg","legs"]},
{word:["dark","darkest","darkening"]},
{word:["various","variety"]},
{word:["laugh","laughs","laughing"]},
{word:["guess","guessing","guesses"]},
{word:["prove","proving","proves"]},
{word:["hang","hangs","hung"]},
{word:["entire","entirety"]},
{word:["rock","rocks","rocking","rocked"]},
{word:["forget","forgets","forgetful","forgetting"]},
{word:["claim","claims","claimed"]},
{word:["remove","removes","removed"]},
{word:["manage","managers","management","manages","manager"]},
{word:["enjoy","enjoys"]},
{word:["network","networks"]},
{word:["legal","legality"]},
{word:["religious","religiousness"]},
{word:["cold","colds"]},
{word:["final","finals","finally"]},
{word:["main","mains"]},
{word:["science","sciences"]},
{word:["green","greens"]},
{word:["memory","memories"]},
{word:["card","cards"]},
{word:["above"]},
{word:["seat","seats"]},
{word:["cell","cells"]},
{word:["establish","establishes","establishment"]},
{word:["nice"]},
{word:["trial","trials"]},
{word:["expert","experts","expertise"]},
{word:["spring","springs","sprung","sprang"]},
{word:["Democrat","democrats"]},
{word:["radio","radios"]},
{word:["visit","visits"]},
{word:["avoid","avoids"]},
{word:["imagine","imagines","imagining","imagined"]},
{word:["tonight","tonights"]},
{word:["huge"]},
{word:["ball","balls","balling"]},
{word:["finish","finishes"]},
{word:["theory","theories","theorizes"]},
{word:["impact","impacts"]},
{word:["statement","statements"]},
{word:["maintain","maintains"]},
{word:["charge","charges","chargin","charging","charged"]},
{word:["popular","popularize","populars"]},
{word:["tradition","traditions","traditional"]},
{word:["reveal","reveals"]},
{word:["direction","directions","directional"]},
{word:["weapon","weapons"]},
{word:["contain","contains","contained","containing"]},
{word:["peace","peaces","peaced"]},
{word:["pain","pains"]},
{word:["apply","applies"]},
{word:["measure","measures"]},
{word:["wide","widening"]},
{word:["shake","shakes","shaking","shook"]},
{word:["fly","flies"]},
{word:["interview","interviews"]},
{word:["chair","chairs"]},
{word:["fish","fishes"]},
{word:["particular"]},
{word:["camera","cameras"]},
{word:["structure","structures"]},
{word:["perform","performs"]},
{word:["bit","bits"]},
{word:["weight","weights","weighty"]},
{word:["sudden","suddenly"]},
{word:["discover","discoverer","discovers"]},
{word:["candidate","candidates"]},
{word:["production","productions"]},
{word:["treat","treats"]},
{word:["trip","trips","tripping","tripped"]},
{word:["evening","evenin"]},
{word:["affect","effect","affects","effects"]},
{word:["inside","insides"]},
{word:["conference","conferences"]},
{word:["unit","units"]},
{word:["style","styles"]},
{word:["adult","adults"]},
{word:["worry","worries"]},
{word:["range","ranges"]},
{word:["mention","mentions"]},
{word:["deep","deeper","deepest"]},
{word:["edge","edges"]},
{word:["specific","specifics"]},
{word:["trouble","troubles"]},
{word:["necessary"]},
{word:["challenge","challenges","challenging"]},
{word:["fear","fears","feared","fearing"]},
{word:["shoulder","shoulders","shouldered"]},
{word:["middle"]},
{word:["sea","seas"]},
{word:["dream","dreams"]},
{word:["bar","bars"]},
{word:["beautiful"]},
{word:["property","properties"]},
{word:["improve","imrpoves","improving","improved"]},
{word:["stuff"]},
{word:["detail","details","detailing","detailed"]},
{word:["sign","signs","signed"]},
{word:["magazine","zine","mag"]},
{word:["hotel","hotels"]},
{word:["reflect","reflects","reflected","reflecting"]},
{word:["heavy","heaviest","heavier"]},
{word:["bag","bags"]},
{word:["heat","heats"]},
{word:["fall","falls"]},
{word:["tough","tougher","toughs","toughest"]},
{word:["sing","sings","sung","sang"]},
{word:["surface","surfaced","surfacing","surfaces"]},
{word:["purpose","purposes","purposed"]},
{word:["exist","existing","exists","existance"]},
{word:["pattern","patterns"]},
{word:["skin","skins"]},
{word:["agent","agents"]},
{word:["owner","owners"]},
{word:["machine","machines"]},
{word:["gas"]},
{word:["down","downs"]},
{word:["commercial","commercials"]},
{word:["address","addresses"]},
{word:["cancer","cancers"]},
{word:["test","tests","testing","tester"]},
{word:["item","items"]},
{word:["reality","realities"]},
{word:["coach","coaches","coaching","coached"]},
{word:["step","steps","stepped","stepping"]},
{word:["yard","yards"]},
{word:["beat","beats"]},
{word:["violence","violent"]},
{word:["total","totals"]},
{word:["tend","tended","tends"]},
{word:["discussion","discussions","discussed","discussing"]},
{word:["finger","fingers","fingered","fingering"]},
{word:["garden","gardening","gardens"]},
{word:["notice","notices","noticing","noticed"]},
{word:["collect","collections","collected","collects","collection","collecting"]},
{word:["modern","moderns"]},
{word:["task","tasks","tasked","tasking"]},
{word:["partner","partners"]},
{word:["positive","positivity","positives"]},
{word:["civil","civility","civils"]},
{word:["kitchen","kitchens"]},
{word:["shot","shots"]},
{word:["budget","budgets"]},
{word:["wish","wishes"]},
{word:["painting","paintings"]},
{word:["safe","safer","safest","safety"]},
{word:["mouth","mouths","mouthing","mouthed"]},
{word:["victim","victims"]},
{word:["threat","threats","threatening","threaten","threatens"]},
{word:["responsible","responsibilities","responsibility"]},
{word:["smile","smiles","smiley","smiled"]},
{word:["score","scores","scored"]},
{word:["account","accounts"]},
{word:["interesting"]},
{word:["audience","audiences"]},
{word:["rich","riches"]},
{word:["dinner","dinners"]},
{word:["figure","figures","figured","figuring"]},
{word:["vote","votes","voting"]},
{word:["relate","relates","relating"]},
{word:["travel","traveler","travels","traveling","travelers","traveled"]},
{word:["debate","debates","debating","debated"]},
{word:["prevent","prevents","prevented","preventing"]},
{word:["none"]},
{word:["front","fronts"]},
{word:["born","birthed","birth"]},
{word:["admit","admits","admitting","admitted"]},
{word:["senior","seniors"]},
{word:["assume","assumed","assuming","assumes"]},
{word:["wind","winds","winding"]},
{word:["key","keys","keyed","keyer"]},
{word:["mission","missions","missionary"]},
{word:["fast","fasts","faster","fasted"]},
{word:["alone"]},
{word:["customer","customers"]},
{word:["suffer","suffers","suffered","suffering"]},
{word:["speech","speeches"]},
{word:["option","options","optioned"]},
{word:["fresh","freshen"]},
{word:["forest","forests","forrest","forrests"]},
{word:["video","videos","vids","vid"]},
{word:["global","globals"]},
{word:["experience","exp","experiences","experienced","experiencing"]},
{word:["access","accessed","accesses"]},
{word:["restaurant","restaurants","restauraunts","restauraunt"]},
{word:["judge","judges","judging","judged"]},
{word:["publish","published","publishing","publishes"]},
{word:["cost","costs","costing"]},
{word:["relation","relations"]},
{word:["release","releases","released","releasing"]},
{word:["bird","birds"]},
{word:["opinion","opinions","opinionated"]},
{word:["credit","credits"]},
{word:["critical","criticals"]},
{word:["corner","corners","cornered","cornering"]},
{word:["version","versions"]},
{word:["stare","stares","staring","stared"]},
{word:["original","originals"]},
{word:["act","acts","acted","acting"]},
{word:["income","incomes","incoming"]},
{word:["direct","directly"]},
{word:["hurt","hurting","hurts"]},
{word:["track","tracks","tracked","tracking"]},
{word:["basic","basics"]},
{word:["strike","struck","strikes"]},
{word:["hope","hopes","hoped","hoping"]},
{word:["sky","skies"]},
{word:["plane","planes"]},
{word:["achieve","achieves","achieved","achiever","achieving"]},
{word:["object","objects","objecting"]},
{word:["attitude","attitudes"]},
{word:["labor","labors"]},
{word:["refer","refers"]},
{word:["concept","concepts","conceptual"]},
{word:["client","clients"]},
{word:["perfect","perfected","perfects"]},
{word:["nine","9","nines","9s"]},
{word:["conduct","conducts","conducting","conductor","conductors"]},
{word:["announce","announces","announcing"]},
{word:["conversation","conversations","conversational"]},
{word:["examine","examines"]},
{word:["touch","touches","touching","touched"]},
{word:["please","pleased","pleases"]},
{word:["attend","attends","attended"]},
{word:["turn","turns","turned"]},
{word:["sleep","sleeps","slept"]},
{word:["involve","involved","involves"]},
{word:["press","pressed","pressing"]},
{word:["conflict","conflictual","conflicts","conflicting"]},
{word:["spirit","spirits"]},
{word:["replace","replaced","replaces"]},
{word:["encourage","encourages","encouraged","encouraging"]},
{word:["argument","arguments"]},
{word:["camp","camps","camping","camped"]},
{word:["brain","brains","brained","brainy"]},
{word:["feature","features","featured","featuring"]},
{word:["afternoon","afternoons"]},
{word:["weekend","weekends"]},
{word:["dozen","dozens","12","12th"]},
{word:["complete","completed","completing","completes"]},
{word:["fan","fans"]},
{word:["stick","sticks","stuck"]},
{word:["define","defines","defined","defining"]},
{word:["hole","holes"]},
{word:["element","elements"]},
{word:["vision","visions","envision","envisioned"]},
{word:["status","statuses"]},
{word:["normal","normals","normalcy"]},
{word:["ship","ships","shipped"]},
{word:["solution","solutions"]},
{word:["stone","stones"]},
{word:["slow","slowly","slows","slowing","slowed"]},
{word:["scale","scaled","scales"]},
{word:["introduce","introduces","introducing","introduced"]},
{word:["attempt","attempts","attempted"]},
{word:["park","parks","parked"]},
{word:["spot","spots","spotted"]},
{word:["lack","lacks","lacked"]},
{word:["ice","ices","iced"]},
{word:["boat","boat","boats"]},
{word:["drink","drinks","drunk"]},
{word:["distance","distances"]},
{word:["wood","wooden","woods"]},
{word:["handle","handles","handling"]},
{word:["truck","trucks","trucked","trucking"]},
{word:["return","returns","returned","returning"]},
{word:["mountain","mountains"]},
{word:["survey","surveys"]},
{word:["suppose","supposed","supposes"]},
{word:["winter","winters"]},
{word:["village","villages","villager"]},
{word:["Soviet","USSR","Russia","Russian"]},
{word:["refuse","refuses","refusing","refused"]},
{word:["sale","sales"]},
{word:["roll","rolls","rolling","rolled"]},
{word:["communication","comm","communications"]},
{word:["screen","screens","screened"]},
{word:["club","clubs"]},
{word:["future","futures"]},
{word:["farm","farms","farmer","farmers"]},
{word:["economic","econ","economics","economy"]},
{word:["orange","oranges"]},
{word:["six","6","6th"]},
{word:["dollar","dollars","$"]},
{word:["duck","ducked"]},
{word:["swoop","cute","adorable","swoops","swooped","swoopies","swoopie-pies"]}

]
    
});
