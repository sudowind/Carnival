qa_repo = [
	['简述摩尔定律？','当价格不变时，集成电路上可容纳的元器件的数目，约每隔18-24个月便会增加一倍，性能也将提升一倍。换言之，每一美元所能买到的电脑性能，将每隔18-24个月翻一倍以上。(意思对即可)'],
	['ThinkPad曾经是哪个公司的电脑品牌？ ','IBM'],
	['众所周知，NVIDIA显卡是众多游戏发烧友的挚爱，请问N卡中的GTX960m的m是什么意思？','m是指专为笔记本设计的显卡，由于笔记本的显卡在散热，重量，大小方面要求高于台式机，GTX6960m就是相对于GTX960阉割之后的显卡（意思靠谱即可）'],
	['修改host文件的主要作用是什么？', '输入域名时本地搜索与域名对应的IP，跳过向DNS解析器服务器发送请求的步骤'],
	['网页脚本可以用哪种语言编写？\nA. Javascript \nB. Lua \nC. Objective-C \nD. Java', 'A'],
	['32位的计算机理论上最多支持多大的内存？', '4G'],
	['想从WIN10回滚到WIN7 or WIN8 时判断能否回滚的依据？','升级到WIN10未满一个月且Windows.old文件夹未被删除。'],
	['WIN+R, WIN+D, WIN+L的功能分别是什么？','打开“运行”，所有窗口最小化，锁屏。'],
	['被广泛应用于以N97. N8. 5230为代表的诺基亚智能手机的手机操作系统是什么？\nA. Android安卓 \nB. Symbian塞班 \nC. WindowsPhone \nD. Linux', 'B'],
	['美国知名无线电通信技术和芯片研发公司，2015年全球第五大半导体企业，其移动处理器平台广泛应用于以小米手机为代表的智能手机，是哪一家公司？ \nA. 英特尔intel \nB. 英伟达NVIDIA \nC. 高通Qualcomm \nD. 联发科', 'C'],
	['中国移动4G网络采用的是哪一种技术标准？\nA. FDD-LTE \nB. WCDMA \nC. CDMA2000 \nD. TD-LTE', 'D'],
	['全球超级计算机500强榜单中六度称雄的我国的超级计算机“天河二号”由____（机构）开发，位于____（城市）？ \nA. 中国科学院 杭州\nB. 国防科技大学 广州\nC. 中国科学院 北京\nD. 国防科技大学 天津', 'B'],
	['在word，excel，ppt中重复上一次操作的快捷键是什么？','F4'],
	['在编辑代码或office文档时撤销上一步操作的与Ctrl有关的快捷键是什么？', 'Ctrl+Z'],
	['windows操作系统中，当选定文件或文件夹后，不将文件或文件夹放到“回收站”中，而直接删除的操作是？', 'shift+delete(以及其他靠谱答案)'],
	['程序员输出的第一行代码是？\nA. “1 2 3”\nB. “你好！”\nC. “hello, world”\nD. "hello, bug"', 'C'],
	['电脑使用过程中突然发热十分明显，以下哪一个操作是不正确的？\nA. 关机，让电脑歇一会，降降温再用\nB. 从冰箱拿出一杯冰水浇上去给它降降温\nC. 买一个散热垫放在电脑下面\nD. 找一个心灵手巧英俊潇洒的信科青协男孩子帮你把电脑拆开清灰涂硅脂', 'B'],
	['如何查看自己的windows版本以及激活状态?（答案靠谱即可）','方法一：找到计算机（我的电脑），右键点击属性\n方法二：win+R，在运行框里输入cmd，在dos界面输入slmgr -dlv。'],
	['Word文档的后缀名是什么？', 'doc或docx'],
	['十六进制3FC3转换为相应的二进制是？', '0011111111000011'],
	['在记事本或写字板窗口中，对当前编辑的文档进行存储，可以用什么快捷键？', 'Ctrl+S'],
	['1MB等于？\nA. 1000×1000字节\nB. 1024字节\nC. 1024×1000字节\nD. 1024×1024字节', 'D'],
	['下列存储设备中，存储速度最快的是？\nA. 软盘\nB. 硬盘\nC. 光盘\nD. 内存', 'D'],
	['在浏览WEB的时候常常系统询问是否接受一种叫"COOKIE"的东西，COOKIE是？\nA. 一种文本文件，记录站点网址\nB. 一种记录用户信息的程序\nC. 一种小文本文件，用以记录浏览过程中的信息\nD. 一种记录一些常去的站点的网页文件','C'],
	['电子计算机技术在半个世纪中虽有很大的进步，但至今其运行仍遵循着一位科学家提出的基本原理，他就是？\nA. 牛顿\nB. 爱因斯坦\nC. 爱迪生\nD. 冯·诺依曼','D'],
	['下列存储设备中，存储速度最快的是？\nA. 软盘\nB. 硬盘\nC. 光盘\nD. 内存', 'D'],
	['北大正版软件平台的网址是什么？', 'software.pku.edu.cn'],
	['计算机的最小存储单位是？\nA. 字\nB. 字节\nC. 位\nD. 字符', 'C'],
	['说出3种电脑内部的硬件？', '显卡、cpu、主板、硬盘、内存']
]

function change_question() {
	document.getElementById('question').innerText="换了一道题";
	document.getElementById('answer').hidden="hidden";
}

function show_answer(num) {
	document.getElementById('a' + num.toString()).hidden="";
}

function show_questions() {
	var content = "";
	for (var i = 0; i < qa_repo.length; ++i) {
		content += i.toString() + '.\t' + qa_repo[i][0] + '\n\n';
	}
	document.getElementById('qs').innerText = content;
}

function get_rand_questions(num) {
	// alert(num);
	// numbers = "";
	tmp = 0;
	len = qa_repo.length;
	for (var i = 0; i < len; ++i) {
		if ((Math.random() * 1000) % (len - i) < num) {
			tmp++;
			document.getElementById("q" + tmp.toString()).innerText = tmp.toString() + '.\t' + qa_repo[i][0];
			document.getElementById("a" + tmp.toString()).innerText = qa_repo[i][1];
			document.getElementById("a" + tmp.toString()).hidden="hidden";
			// numbers += i.toString() + " ";
			num--;
		}
	}
	// document.getElementById('random_number').innerText = numbers;
}
