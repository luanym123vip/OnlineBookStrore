// JavaScript Document
function texthover(){
	document.getElementById('quanly-tk').style.display='block';
	document.getElementById('quanly-tk').style.animationName='ex4';
	document.getElementById('quanly-tk').style.animationDuration='1.5s';
	document.getElementById('quanly-tk').style.width='227px';
	document.getElementById('quanly-sp').style.display='block';
	document.getElementById('quanly-sp').style.animationName='ex4';
	document.getElementById('quanly-sp').style.animationDuration='1.5s';
	document.getElementById('quanly-sp').style.width='227px';
	document.getElementById('quanly-nv').style.display='block';
	document.getElementById('quanly-nv').style.animationName='ex4';
	document.getElementById('quanly-nv').style.animationDuration='1.5s';
	document.getElementById('quanly-nv').style.width='227px';
	document.getElementById('quanly-kh').style.display='block';
	document.getElementById('quanly-kh').style.animationName='ex4';
	document.getElementById('quanly-kh').style.animationDuration='1.5s';
	document.getElementById('quanly-kh').style.width='227px';
	document.getElementById('quanly-hd').style.display='block';
	document.getElementById('quanly-hd').style.animationName='ex4';
	document.getElementById('quanly-hd').style.animationDuration='1.5s';
	document.getElementById('quanly-hd').style.width='227px';				
}
function textout(){
	document.getElementById('quanly-tk').style.display='none';				
	document.getElementById('quanly-sp').style.display='none';				
	document.getElementById('quanly-nv').style.display='none';				
	document.getElementById('quanly-kh').style.display='none';				
	document.getElementById('quanly-hd').style.display='none';								
}																		
var userarr=[];
function User(){
	if (localStorage.getItem('user')==null){					
		var user={nameid:'admin',password:'admin',name:'Nguyễn Văn Minh Đức',sex:'Nam',dateofbirth:'12/12/2001',phone:'0123456789',address:'123 An Dương Vương',power:'1',status:true};
		var user1={nameid:'quanly',password:'quanly1',name:'Nguyễn Lim Thái Hồ',sex:'Nam',dateofbirth:'30/10/2001',phone:'0987654323',address:'15F Nguyễn Thị Minh Khai',power:'2',status:true};
		var user2={nameid:'quanly2',password:'quanly2',name:'Lê Thị Cẩm Duyên',sex:'Nữ',dateofbirth:'10/10/2001',phone:'0789456123',address:'5 Đinh Bộ Lĩnh',power:'2',status:true};
		
		var user3={nameid:'nhanvien1',password:'nhanvien1',name:'Nguyễn Thị Ngọc Bảo',sex:'Nữ',dateofbirth:'28/12/1999',phone:'0782656123',address:'254 Nguyễn Đình Chiểu',power:'3',status:true};
		
		var user4={nameid:'nhanvien2',password:'nhanvien2',name:'Ngô Minh Khang',sex:'Nam',dateofbirth:'05/12/1998',phone:'0789678123',address:'82 Nguyễn Hữu Cảnh',power:'3',status:true};
		
		var user5={nameid:'khachhang1',password:'khachhang1',name:'Nguyễn Văn Công',sex:'Nam',dateofbirth:'14/02/2001',phone:'0789128123',address:'47 Trần Cao Vân',power:'3',status:false};
		
		var user6={nameid:'khachhang2',password:'khachhang2',name:'Nguyễn Ngọc Ngạn',sex:'Nam',dateofbirth:'15/03/2000',phone:'0789452323',address:'09 Nguyễn Đình Chiểu',power:'3',status:true};
		
		var user7={nameid:'khachhang3',password:'khachhang3',name:'Nguyễn Tri Phương',sex:'Nam',dateofbirth:'04/05/1991',phone:'0985436123',address:'53C Nguyễn Du',power:'3',status:false};
		
		var user8={nameid:'khachhang4',password:'khachhang4',name:'Nguyễn Thị Ngọc Trinh',sex:'Nữ',dateofbirth:'02/02/1989',phone:'0929423123',address:'91 Nguyễn Du',power:'0',status:true};
		
		var user9={nameid:'khachhang5',password:'khachhang5',name:'Nguyễn Cảnh Minh',sex:'Nam',dateofbirth:'25/12/1999',phone:'0949426123',address:'17 Võ Văn Tần',power:'0',status:true};
		
		var user10={nameid:'khachhang6',password:'khachhang6',name:'Trần Thanh Huyền',sex:'Nữ',dateofbirth:'24/07/2000',phone:'0989426123',address:'92 Nguyễn Thị Minh Khai',power:'0',status:true};
		
		var user11={nameid:'khachhang7',password:'khachhang7',name:'Đinh Tiến Đạt',sex:'Nam',dateofbirth:'12/05/1998',phone:'090496123',address:'65B Cao Thắng',power:'0',status:true};
		
		var user12={nameid:'khachhang8',password:'khachhang8',name:'Đinh Thị Thu Trang',sex:'Nữ',dateofbirth:'25/02/1999',phone:'0924456123',address:'199 Điện Biên Phủ',power:'0',status:true};
		
		var user13={nameid:'khachhang9',password:'khachhang9',name:'Nguyễn Thanh Tùng',sex:'Nam',dateofbirth:'14/02/1997',phone:'0927896123',address:'25 Sư Vạn Hạnh',power:'0',status:false};
		
		var user14={nameid:'khachhang10',password:'khachhang10',name:'Nguyễn Cẩm Tú',sex:'Nữ',dateofbirth:'30/07/1998',phone:'0789866123',address:'177 An Dương Vương',power:'0',status:true};
		
		var user15={nameid:'khachhang11',password:'khachhang11',name:'Trần Hoàng Minh Mẫn',sex:'Nam',dateofbirth:'16/06/1996',phone:'0906456123',address:'16 Tô Hiến Thành',power:'0',status:false};
		
		var user16={nameid:'khachhang12',password:'khachhang12',name:'Nguyễn Trần Trung Quân',sex:'Nam',dateofbirth:'09/12/1995',phone:'0972456523',address:'277 Xô Viết Nghệ Tĩnh',power:'0',status:true};
		
		var user17={nameid:'khachhang13',password:'khachhang13',name:'Nguyễn Đăng Khoa',sex:'Nam',dateofbirth:'08/05/2001',phone:'0981456123',address:'26 Nguyễn Tri Phương',power:'0',status:true};
		
		var user18={nameid:'khachhang14',password:'khachhang14',name:'Nguyễn Ngọc Tường Vi',sex:'Nữ',dateofbirth:'02/01/2000',phone:'0989423123',address:'461 Cách Mạng Tháng Tám',power:'0',status:true};
		
		var user19={nameid:'khachhang15',password:'khachhang15',name:'Nguyễn Thị Ái Vân',sex:'Nữ',dateofbirth:'25/06/2001',phone:'0790256123',address:'18 Lữ Gia',power:'0',status:true};
		
		userarr.push(user);
		userarr.push(user1);
		userarr.push(user2);
		userarr.push(user3);
		userarr.push(user4);
		userarr.push(user5);
		userarr.push(user6);
		userarr.push(user7);
		userarr.push(user8);
		userarr.push(user9);
		userarr.push(user10);
		userarr.push(user11);
		userarr.push(user12);
		userarr.push(user13);
		userarr.push(user14);
		userarr.push(user15);
		userarr.push(user16);
		userarr.push(user17);
		userarr.push(user18);
		userarr.push(user19);
		localStorage.setItem('user',JSON.stringify(userarr));
	}
}
var productarr=[];
function Product(){
	if (localStorage.getItem('product')==null){
		productarr=[
			{img:'Android.jpg',productid:'ds.android',productname:'Giáo trình lập trình Android',productauthor:'Lê Hoàng Son',productcategory:'Đời sống công nghệ và kỹ thuật',productprice:73000,productdescribe:'Học lập trình cho hệ điều hành Android giỏi hơn'},
			{img:'AnToanDuLieu.jpg',productid:'ds.atdl',productname:'An Toàn Dữ Liệu',productauthor:'TS.Lê Đắc Nhường',productcategory:'Đời sống công nghệ và kỹ thuật',productprice:130000,productdescribe:'Học an toàn dữ liệu, tạo database an toàn hơn'},
			{img:'CSharp.jpg',productid:'ds.laptrinhvoic#',productname:'Lập Trình Với C#',productauthor:'Phạm Quang Huy',productcategory:'Đời sống công nghệ và kỹ thuật',productprice:125000,productdescribe:'Học lập trình C Sharp'},
			{img:'CCNA.jpg',productid:'ds.ccna',productname:'Hướng Dẫn Học CCNA',productauthor:'Trung Tâm Tin Học Vnpro',productcategory:'Đời sống công nghệ và kỹ thuật',productprice:200000,productdescribe:'Học thêm về CCNA'},
			{img:'CSLT.jpg',productid:'ds.cslt',productname:'Giáo trình lập trình cơ sở',productauthor:'TS.Lê Đắc Nhường',productcategory:'Đời sống công nghệ và kỹ thuật',productprice:127000,productdescribe:'Học cơ sở nền tảng về lập trình'},
			{img:'Excel.jpg',productid:'ds.excel',productname:'Phương Pháp Tính Kết Cấu Excel',productauthor:'Bạch Văn Đạt',productcategory:'Đời sống công nghệ và kỹ thuật',productprice:120000,productdescribe:'Học thêm phương pháp tính của Excel'},
			{img:'KTLT C.jpg',productid:'ds.ktlt',productname:'Kỹ Thuật Lập Trình C',productauthor:'GS.Phạm Văn Ất',productcategory:'Đời sống công nghệ và kỹ thuật',productprice:135000,productdescribe:'Học chuyên sâu về lập trình C'},
			{img:'PhotoshopCC.jpg',productid:'ds.photoshopcc',productname:'Tự học Photoshop CC toàn tập',productauthor:'KS.Phạm Quang Huy',productcategory:'Đời sống công nghệ và kỹ thuật',productprice:120000,productdescribe:'Tìm hiểu thêm về Photoshop CC'},
			{img:'Python.jpg',productid:'ds.python',productname:'Python Cơ Bản',productauthor:'Bùi Việt Hà',productcategory:'Đời sống công nghệ và kỹ thuật',productprice:125000,productdescribe:'Học cơ sở nền tảng về ngôn ngữ Python'},
			{img:'Scratch.jpg',productid:'ds.scratch',productname:'Tự Học Lập Trình Scratch',productauthor:'Bùi Việt Hà',productcategory:'Đời sống công nghệ và kỹ thuật',productprice:220000,productdescribe:'Học cơ bản về Scratch'},
			
			{img:'21BaiHoc.jpg',productid:'tl.21baihocchotk21',productname:'21 Bài Học Cho Thế Kỉ 21',productauthor:'Yuval Noah Harari',productcategory:'Đời sống tâm lý',productprice:209000,productdescribe:'Sau khi tìm hiểu quá khứ và tương lai của nhân loại qua hai cuốn sách gây tiếng vang là Sapiens và Homo deus, Yuval Noah Harari đi sâu vào các vấn đề “ngay tại đây” và “ngay lúc này”, tức các sự kiện hiện tại và tương lai gần nhất của xã hội loài người.'},
			{img:'CafeCungTony.jpg',productid:'tl.cafecungtony',productname:'Cà Phê Cùng Tony',productauthor:'Tony Buổi Sáng',productcategory:'Đời sống tâm lý',productprice:90000,productdescribe:'Cà Phê Cùng Tony là tập hợp những bài viết của tác giả Tony Buổi Sáng. Đúng như tên gọi, mỗi bài nhẹ nhàng như một tách cà phê, mà bạn trẻ có thể nhận ra một chút gì của chính mình hay bạn bè mình trong đó'},
			{img:'DacNhanTam.jpg',productid:'tl.dacnhantam',productname:'Đắc Nhân Tâm',productauthor:'Dale Carnegie',productcategory:'Đời sống tâm lý',productprice:76000,productdescribe:'Đắc nhân tâm của Dale Carnegie là quyển sách duy nhất về thể loại self-help liên tục đứng đầu danh mục sách bán chạy nhất (best-selling Books) do báo The New York Times bình chọn suốt 10 năm liền.'},
			{img:'DayConLamGiau.jpg',productid:'tl.dayconlamgiau',productname:'Dạy Con Làm Giàu 1: Để Không Có Tiền Vẫn Tạo Ra Tiền',productauthor:'Robert T.Kiyosaki',productcategory:'Đời sống tâm lý',productprice:65000,productdescribe:'Người giàu không làm việc vì tiền. Họ bắt tiền làm việc cho họ. Chấp nhận thất bại là bước đầu của thành công? Quyền lực của sự lựa chọn! Những bài học không có trong nhà trường. Hãy bắt đầu từ hôm nay “để không có tiền vẫn tạo ra tiền”…'},
			{img:'GaNghienGiay.jpg',productid:'tl.ganghiengiay',productname:'Gã Nghiện Giày',productauthor:'Phil Knight',productcategory:'Đời sống tâm lý',productprice:160000,productdescribe:'Một câu chuyện cuốn hút, và truyền cảm hứng.... 24 tuổi, lấy bằng MBA ở Đại học Stanford, trăn trở với những câu hỏi lớn của cuộc đời, băn khoăn không biết tiếp tục làm việc cho một tập đoàn lớn hay tạo dựng sư nghiệp riêng cho mình... '},
			{img:'HaySongNhuNhungGiBanMuon.jpg',productid:'tl.hsnngbn',productname:'Hãy Sống Như Những Gì Bạn Muốn',productauthor:'Jung-eun Yun',productcategory:'Đời sống tâm lý',productprice:86000,productdescribe:'Những cô gái mong muốn thoát khỏi cái nhìn của người khác để sống là như chính mình là: tự tin với vẻ đẹp bản thân, tự tin sống đúng với cá tính và tự tin theo đuổi đam mê của riêng mình.'},
			{img:'nevereatalone.jpg',productid:'tl.nevereatalone',productname:'Đừng Bao Giờ Đi Ăn Một Mình',productauthor:'Keith Ferrazzi',productcategory:'Đời sống tâm lý',productprice:112000,productdescribe:'Trong quyển sách Đừng bao giờ đi ăn một mình, Ferrazzi chỉ ra từng bước cách thức - và lý do - mà chính ông đã áp dụng để kết nối với hàng ngàn người là đồng nghiệp, bạn bè có tên trong số danh bạ.'},
			{img:'Trump.jpg',productid:'tl.trump',productname:'Donald Trump: Màn Trình Diễn Vĩ Đại',productauthor:'Wayne Berrett',productcategory:'Đời sống tâm lý',productprice:178000,productdescribe:'Trump - doanh nhân nổi tiếng nhất thế giới này thẳng thắn giãi bày những thách thức to lớn nhất, những giây phút tệ hại nhất, và những cuộc chiến khốc liệt nhất - và cách ông biến những nghịch cảnh đó thành các thành công mới.'},
			{img:'TuoiTreDangGiaBaoNhieu.jpg',productid:'tl.tuoitre',productname:'Tuổi Trẻ Đáng Giá Bao Nhiêu?',productauthor:'Rosie Nguyễn',productcategory:'Đời sống tâm lý',productprice:80000,productdescribe:'Hãy đọc sách, nếu bạn đọc sách một cách bền bỉ, sẽ đến lúc bạn bị thôi thúc không ngừng bởi ý muốn viết nên cuốn sách của riêng mình.'},
			{img:'UocGiToiDa.jpg',productid:'tl.uocgitoida',productname:'Ước Gì Tôi Đã...',productauthor:'Brommie Work',productcategory:'Đời sống tâm lý',productprice:127000,productdescribe:'Sau nhiều năm không cảm thấy mãn nguyện trong công việc, Bronnie Ware bắt đầu cuộc hành trình tìm kiếm một công việc ý nghĩa. Mặc dù không có bằng cấp lẫn kinh nghiệm, bà tìm được một công việc chăm sóc sức khỏe cuối đời.'},
			
			{img:'5cmPerSecond.jpg',productid:'ln.5cm/s',productname:'5cm Trên Giây',productauthor:'Shinkai Makoto',productcategory:'Light Novel',productprice:50000,productdescribe:'5cm/s không chỉ là vận tốc của những cánh anh đào rơi, mà còn là vận tốc khi chúng ta lặng lẽ bước qua đời nhau, đánh mất bao cảm xúc thiết tha nhất của tình yêu.'},
			{img:'Another.jpg',productid:'ln.another',productname:'Another',productauthor:'Yukito Ayatsuji',productcategory:'Light Novel',productprice:80000,productdescribe:'Hai mươi sáu năm về trước có một học sinh hoàn thiện hoàn mĩ. Rất đẹp, rất giỏi, rất hòa đồng, ai cũng yêu quý, những lời tán tụng người ấy được truyền mãi qua các thế hệ học sinh của trường. Nhưng tên đầy đủ là gì, chết đi thế nào, thậm chí giới tính ra sao lại không một ai hay biết.'},
			{img:'DateALive.jpg',productid:'ln.datealive',productname:'Date A Live',productauthor:'Koushi Tachibana',productcategory:'Light Novel',productprice:98000,productdescribe:'Ngày đầu tiên đi học sau kỳ nghỉ xuân, Itsuka Shido được em gái dễ thương của mình đánh thức như mọi khi. Nhưng cậu không biết rằng hôm nay là ngày mà định mệnh cậu thay đổi chỉ bởi một cuộc gặp gỡ tình cờ với một cô gái vô danh...'},
			{img:'Gosick.jpg',productid:'ln.gosick',productname:'Gosick',productauthor:'Kazuki Sakuraba',productcategory:'Light Novel',productprice:80000,productdescribe:'Vào đầu thế kỉ trước, tại tiểu quốc Sauville nằm ở châu Âu, có một du học sinh đến từ đảo quốc cực Đông tên là Kujou Kazuya. Cậu gặp gỡ Victorique, một thiếu nữ xinh đẹp và bí ẩn tại toà tháp thư viện của học viện Thánh Marguerite. '},
			{img:'Haruhi.jpg',productid:'ln.haruhi',productname:'Suzumiya Haruhi',productauthor:'Tanigawa Nagaru',productcategory:'Light Novel',productprice:54000,productdescribe:'Nội dung series xoay quanh cô nàng nữ sinh trung học Suzumiya Haruhi cùng những trò kì lạ của cô và bạn bè trong Đoàn SOS - câu lạc bộ do cô thành lập.'},
			{img:'KhuVuonNgonTu.jpg',productid:'ln.khuvuonngontu',productname:'Khu Vườn Ngôn Từ',productauthor:'Shinkai Makoto',productcategory:'Light Novel',productprice:95000,productdescribe:'Khái niệm tình yêu trong tiếng Nhật hiện đại là luyến hoặc ái, nhưng vào thời xưa nó được viết là cô bi, nghĩa là nỗi buồn một mình. Shinkai Makoto đã cấu tứ Khu vườn ngôn từ theo ý nghĩa cổ điển này.'},
			{img:'NhungDuaTreDuoiTheoTinhTu.jpg',productid:'ln.ndtdttt',productname:'Những Đứa Trẻ Đuổi Theo Tinh Tú',productauthor:'Shinkai Makoto',productcategory:'Light Novel',productprice:60000,productdescribe:'Biết không chạm tới mà vẫn mải miết theo đuổi, là hành động thường chỉ bắt gặp ở tâm hồn không chịu tuyệt vọng như trẻ thơ. Người ngoài nhìn vào thấy rất ngẩn ngơ, nhưng ấm lạnh ra sao chỉ người trong cuộc biết.'},
			{img:'NoGameNoLife.jpg',productid:'ln.nogamenolife',productname:'No Game No Life',productauthor:'Yuu Kamiya',productcategory:'Light Novel',productprice:329000,productdescribe:'In this fantasy world, everythings a game--and these gamer siblings play to win! Meet Sora and Shiro, a brother and sister who are loser shut-ins by normal standards. But these siblings dont play by the rules of the crappy game that is average society.'},
			{img:'SAO.jpg',productid:'ln.sao',productname:'Sword Art Online',productauthor:'Reki Kawahara',productcategory:'Light Novel',productprice:125000,productdescribe:'Game Over đồng nghĩa với cái chết thực sự của người chơi. Không hề hay biết chân tướng này, khoảng 10.000 người đã đăng nhập MMO thế hệ mới Sword Art Online (SAO), cùng mở màn cho một cuộc tử chiến tàn khốc. '},
			{img:'YourName.jpg',productid:'ln.yourname',productname:'Your Name',productauthor:'Shinkai Makoto',productcategory:'Light Novel',productprice:75000,productdescribe:'Mitsuha là nữ sinh trung học sống ở vùng quê hẻo lánh. Một ngày nọ, cô mơ thấy mình ở Tokyo trong một căn phòng xa lạ, biến thành con trai, gặp những người bạn chưa từng quen biết.'},
		
			{img:'BieuTuongThatTruyen.jpg',productid:'tt.biettuongthattruyen',productname:'Biểu Tượng Thất Truyền',productauthor:'Dan Brown',productcategory:'Trinh Thám',productprice:219000,productdescribe:'Cuốn sách đưa người đọc song hành cùng nhà biểu tượng học lừng danh Robert Langdon trong cuộc hành trình tới thủ đô nước Mỹ và khám phá bức màn bí ẩn về Hội Tam Điểm'},
			{img:'DiemDoiLua.jpg',productid:'tt.diemdoilua',productname:'Điểm Dối Lừa',productauthor:'Dan Brown',productcategory:'Trinh Thám',productprice:185000,productdescribe:'Khi vệ tinh phát hiện ra một vật thể lạ bị chôn vùi dưới lòng sông băng ở Bắc Cực, NASA lập tức tận dụng cơ hội này để đưa ra tuyên bố về một kì tích chắc chắn sẽ ảnh hưởng mạnh mẽ đến kì bầu cử Tổng thống đang đến gần'},
			{img:'HoaNguc.jpg',productid:'tt.hoanguc',productname:'Hỏa Ngục',productauthor:'Dan Brown',productcategory:'Trinh Thám',productprice:219000,productdescribe:'Giáo sư biểu tượng học của Harvard, Robert Langdon, tỉnh lại trong một bệnh viện vào lúc nửa đêm. Anh hoàn toàn mất phương hướng và đau đầu dữ dội, cũng chẳng nhớ nổi điều gì'},
			{img:'LeonardDaVinci.jpg',productid:'tt.leonardodavinci',productname:'Leonardo Da Vinci',productauthor:'Walter Isaacson',productcategory:'Trinh Thám',productprice:789000,productdescribe:'Ông là thiên tài sáng tạo nhất trong lịch sử. Ông có thể truyền lại cho chúng ta bí mật gì?'},
			{img:'PhaoDaiSo.jpg',productid:'tt.phaodaiso',productname:'Pháo Đài Số',productauthor:'Dan Brown',productcategory:'Trinh Thám',productprice:199000,productdescribe:'Được tổng thống Truman thành lập năm 1952, Cơ quan An ninh Quốc gia NSA đảm nhiệm trọng trách bảo vệ các liên lạc của chính phủ Hoa Kỳ và thu thập liên lạc của các quốc gia khác'},
			{img:'SherlockHolmes.jpg',productid:'tt.sherlockholmes',productname:'Sherlock Holmes',productauthor:'Arthur Conan Doyle',productcategory:'Trinh Thám',productprice:122000,productdescribe:'Sherlock Holmes là một thám tử tư ở Luân Đôn nổi tiếng nhờ trí thông minh, khả năng suy diễn logic và quan sát tinh tường trong khi phá những vụ án mà cảnh sát phải bó tay.'},
			{img:'SuImLangCuaBayCuu.jpg',productid:'tt.suimlangcuabaycuu',productname:'Sự Im Lặng Của Bầy Cừu',productauthor:'Thomas Harris',productcategory:'Trinh Thám',productprice:115000,productdescribe:'Kể về vụ án giết người hàng loạt xảy ra nhưng không để lại dấu vết. Điều kỳ lạ là Lecter - một bác sĩ tâm lý bị tâm thần đang điều trị tại Dưỡng Trí Viện biết rất rõ về hành vi của kẻ sát nhân nhưng chỉ im lặng.'},
			{img:'TheBookThief.jpg',productid:'tt.thebookthief',productname:'The Book Thief',productauthor:'Markus Zusak',productcategory:'Trinh Thám',productprice:352000,productdescribe:'Set in 1939 Germany, nine year-old Liesels parents have been taken away to a concentration camp and she is now living with a foster family in a box-like house on Himmel Street.'},
			{img:'ThienThanVaAcQuy.jpg',productid:'tt.thienthanvaacquy',productname:'Thiên Thần Và Ác Quỷ',productauthor:'Dan Brown',productcategory:'Trinh Thám',productprice:185000,productdescribe:'Robert Langdon giáo sư biểu tượng học của Harvard, được bí mật mời tới trung tâm nghiên cứu Hạt nhân Châu Âu – cơ quan nghiên cứu khoa học lớn nhất thế giới – để làm sáng tỏ cái chết của nhà vật lý học Leonardo Vetra.'},
			{img:'Thu Toi.jpg',productid:'tt.thutoi',productname:'Thú Tội',productauthor:'Minato Kanae',productcategory:'Trinh Thám',productprice:86000,productdescribe:'Cảnh sát nhận định đây là vụ tai nạn nhưng Moriguchi biết ai đã sát hại con gái mình -  kẻ ở ngay trong lớp học do mình chủ nhiệm. Moriguchi bắt đầu kế hoạch báo thù của riêng cô...'},
			
			{img:'AssasinationClassroom.jpg',productid:'mg.assasinationclassroom',productname:'Lớp Học Ám Sát',productauthor:'Yusei Matsui',productcategory:'Truyện Tranh-Thiếu Nhi',productprice:22000,productdescribe:'Một sinh vật đặc biệt mang hình dáng bạch tuộc tuyên bố sẽ phá hủy Trái Đất, nhưng chẳng hiểu sao lại cho nhân loại một cơ hội. Đó là yêu cầu được dạy một lớp học siêu quậy, và tạo mọi điều kiện cho bọn học trò ám sát mình!?'},
			{img:'Barakamon.jpg',productid:'mg.barakamon',productname:'Barakamon',productauthor:'Yoshino Satsuki',productcategory:'Truyện Tranh-Thiếu Nhi',productprice:12000,productdescribe:'Vì lý do riêng, nhà thư pháp trẻ tuổi đẹp trai Handa Seishu phải chuyển tới sống tại một hòn đảo nằm ở cực Tây Nhật Bản. Tại đây, “anh thầy thư pháp” còn bỡ ngỡ với cuộc sống thôn quê này gặp gỡ những cư dân quá đỗi phóng khoáng trên đảo.'},
			{img:'Conan.jpg',productid:'mg.conan',productname:'Thám Tử Conan',productauthor:'Gosho AOYAMA',productcategory:'Truyện Tranh-Thiếu Nhi',productprice:20000,productdescribe:'Makoto Kyogoku bị cuốn vào những vụ án xảy ra tại một địa điểm quay phim truyền hình…!?'},
			{img:'Doraemon.jpg',productid:'mg.doraemon',productname:'Doraemon',productauthor:'Fujiko F.Fujio',productcategory:'Truyện Tranh-Thiếu Nhi',productprice:35000,productdescribe:'Cuốn sách này tập hợp những câu chuyện vô cùng thú vị về chú mèo máy Doraemon, từ tập 1 đến tập 23 và được chia theo 10 chủ đề chính.'},
			{img:'Inuyasha.jpg',productid:'mg.inuyasha',productname:'Khuyển Dạ Xoa',productauthor:'Rumiko Takahashi',productcategory:'Truyện Tranh-Thiếu Nhi',productprice:60000,productdescribe:'Cô nữ sinh Kagome vô tình bị lạc về thời Chiến quốc và gặp gỡ bán yêu Inuyasha. Do một sự cố không mong muốn, viên ngọc Tứ Hồn có khả năng mang đến sức mạnh vô biên cho yêu quái đã bị vỡ tan thành trăm mảnh và phân tán khắp nơi.'},
			{img:'MeoMoc.jpg',productid:'mg.meomoc',productname:'Mèo Mốc',productauthor:'Mèo Mốc',productcategory:'Truyện Tranh-Thiếu Nhi',productprice:109000,productdescribe:'Hẳn bạn đã quen với hình ảnh chú sư tử cá Merlion oai nghiêm của đảo quốc sư tử Singapore? Vậy bạn có biết con sư tử đầu Mốc Mốc-lion?'},
			{img:'Naruto.jpg',productid:'mg.naruto',productname:'Naruto',productauthor:'Masashi Kishimoto',productcategory:'Truyện Tranh-Thiếu Nhi',productprice:22000,productdescribe:'Tác phẩm đã sớm vươn ra ngoài thế giới và trở thành một trong những “tượng đài” trong lòng độc giả xảy ra ở làng Lá với nhân vật chính là Naruto.'},
			{img:'Nozaki.jpg',productid:'mg.nozaki',productname:'Nozaki',productauthor:'Tsubaki Izumi',productcategory:'Truyện Tranh-Thiếu Nhi',productprice:32000,productdescribe:'Nozaki Umetaro là một nam sinh cấp ba khô khan. Cô bạn Sakura Chiyo thích cậu và đã dồn hết can đảm để tỏ tình. Nhưng không hiểu sao cô không trở thành người yêu, mà thành trợ lý bất đắc dĩ cho cậu tác giả truyện tranh thiếu nữ này.'},
			{img:'Shin.jpg',productid:'mg.shin',productname:'Shin',productauthor:'Yoshito Usui',productcategory:'Truyện Tranh-Thiếu Nhi',productprice:19000,productdescribe:'Crayon Shin-chan (tên tiếng Việt: Shin-cậu bé bút chì) của tác giả Yoshito Usui là một trong những bộ manga nổi tiếng của Nhật Bản.'},
			{img:'Tsubasa.jpg',productid:'mg.tsubasa',productname:'Tsubasa',productauthor:'Yoichi Takahashi',productcategory:'Truyện Tranh-Thiếu Nhi',productprice:22000,productdescribe:'“Captain Tsubasa” - Câu chuyện về cậu bé luôn xem “trái bóng là bạn” cùng sự trưởng thành và thành tựu của cậu về sau, ra mắt năm 1981 trên tuần san Shonen Jump.'},
			
			{img:'Before I Fall.jpg',productid:'tth.beforeifall',productname:'Before I Fall',productauthor:'Lauren Oliver',productcategory:'Tiểu Thuyết',productprice:250000,productdescribe:'Before I Fall raises thought-provoking questions about love, death, and how one persons life can affect so many others.'},
			{img:'Don Quixote.jpg',productid:'tth.donquixote',productname:'Don Quixote',productauthor:'Miguel De Cervantes',productcategory:'Tiểu Thuyết',productprice:155000,productdescribe:'Don Quixote, tiểu thuyết hay nhất mọi thời đại, được dịch ra nhiều thứ tiếng nhất và được tái bản nhiều nhất trong lịch sử nhân loại, chỉ sau Kinh Thánh.'},
			{img:'FantasticBeast.jpg',productid:'tth.fantasticbeast',productname:'Fantastic Beasts And Where To Find It',productauthor:'J.K.Rowling',productcategory:'Tiểu Thuyết',productprice:429000,productdescribe:'An approved textbook at Hogwarts School of Witchcraft and Wizardry since first publication, Fantastic Beasts and Where to Find Them is an indispensable guide to the magical beasts of the wizarding world.'},
			{img:'GameOfThrone.jpg',productid:'tth.gameofthrone',productname:'A Game Of Thrones',productauthor:'George R.R.Martin',productcategory:'Tiểu Thuyết',productprice:330000,productdescribe:'The first volume in the hugely popular and highly acclaimed epic fantasy series, A Song of Ice and Fire. There is passion here, and misery and charm, grandeur and squalor, tragedy, nobility and courage.'},
			{img:'LifeOfPi.jpg',productid:'tth.lifeofpi',productname:'Life Of Pi',productauthor:'Margaret Atwood',productcategory:'Tiểu Thuyết',productprice:230000,productdescribe:'After the tragic sinking of a cargo ship, a solitary lifeboat remains bobbing on the wild, blue Pacific. The only survivors from the wreck are a sixteen-year-old boy named Pi, a hyena, a zebra (with a broken leg), a female orang-utan - and a 450-pound Royal Bengal tiger.'},
			{img:'Malicious.jpg',productid:'tth.malicious',productname:'Malicious',productauthor:'James O.Born',productcategory:'Tiểu Thuyết',productprice:115000,productdescribe:'Mitchum is back. His brothers been charged with murder. Nathaniel swears he didnt kill anyone, but word on the street is that he was involved with the victims wife. Now, Navy SEAL dropout Mitchum will break every rule to expose the truth--even if it destroys the people he loves.'},
			{img:'MeBeforeYou.jpg',productid:'tth.mebeforeyou',productname:'Me Before You',productauthor:'Jojo Moyes',productcategory:'Tiểu Thuyết',productprice:235000,productdescribe:'Louisa Clark is an ordinary girl living an exceedingly ordinary life-steady boyfriend, close family-who has barely been farther afield than their tiny village.'},
			{img:'NguonCoi.jpg',productid:'tth.nguoncoi',productname:'Nguồn Cội',productauthor:'Dan Brown',productcategory:'Tiểu Thuyết',productprice:250000,productdescribe:'Robert Langdon, giáo sư biểu tượng và biểu tượng tôn giáo đến từ trường đại học Harvard, đã tới Bảo tàng Guggenheim Bilbao để tham dự một sự kiện quan trọng - công bố một phát hiện sẽ thay đổi bộ mặt khoa học mãi mãi.'},
			{img:'NhaGiaKim.jpg',productid:'tth.nhagiakim',productname:'Nhà Giả Kim',productauthor:'Paulo Coelho',productcategory:'Tiểu Thuyết',productprice:69000,productdescribe:'Tất cả những trải nghiệm trong chuyến phiêu du theo đuổi vận mệnh của mình đã giúp Santiago thấu hiểu được ý nghĩa sâu xa nhất của hạnh phúc, hòa hợp với vũ trụ và con người.'},
			{img:'TheChildrenOfHurin.jpg',productid:'tth.thechildrenofhurin',productname:'The Children Of Hurin',productauthor:'J.R.R. Tolkien',productcategory:'Tiểu Thuyết',productprice:149000,productdescribe:'Their brief and passionate lives are dominated by the elemental hatred that Morgoth bears them as the children of Húrin, the man who dared to defy him to his face.'},
			{img:'TheWitcher.jpg',productid:'tth.thewitcher',productname:'The Witcher: The Last Wish',productauthor:'Andrej Sapkowski',productcategory:'Tiểu Thuyết',productprice:216000,productdescribe:'Geralt the Witcher-revered and hated-holds the line against the monsters plaguing humanity in this first book in the NYT bestselling series that inspired the blockbuster Witcher videogames.'},
			{img:'TiengGoiCuaHoangDa.jpg',productid:'tth.tienggoicuahoangda',productname:'Tiếng Gọi Của Hoang Dã',productauthor:'Jack London',productcategory:'Tiểu Thuyết',productprice:50000,productdescribe:'Một loạt các sự kiện xảy ra khi Buck bị bắt khỏi trang trại để trở thành chó kéo xe ở khu vực Alaska lạnh giá, trong giai đoạn mọi người đổ xô đi tìm vàng thế kỷ 19, thiên nhiên nguyên thủy đã đánh thức bản năng của Buck.'},
			
			{img:'ChiPheo.jpg',productid:'vhnt.chipheo',productname:'Chí Phèo',productauthor:'Nam Cao',productcategory:'Văn Học Nghệ Thuật',productprice:100000,productdescribe:'Với những tình tiết hấp hẫn Nam Cao đã đưa người đọc tái hiện bức tranh chân thực nông thôn Việt Nam trước 1945, nghèo đói, xơ xác trên con đường phá sản, bần cùng, hết sức thê thảm, người nông dân bị đẩy vào con đường tha hóa, lưu manh hóa.'},
			{img:'DatRungPhuongNam.jpg',productid:'vhnt.datrungphuongnam',productname:'Đất Rừng Phương Nam',productauthor:'Đoàn Giỏi',productcategory:'Văn Học Nghệ Thuật',productprice:62000,productdescribe:'Câu chuyện mượn hình ảnh một cậu bé bị lưu lạc trong thời kỳ kháng chiến chống Pháp ở Nam bộ để giới thiệu Đất rừng Phương Nam. Nơi đó, một vùng đất vô cùng giàu có, hào phóng và hùng vĩ với những con người trung hậu, trí dũng, một lòng một dạ theo kháng chiến.'},
			{img:'Lam Di.jpg',productid:'vhnt.lamdi',productname:'Làm Đĩ',productauthor:'Vũ Trọng Phụng',productcategory:'Văn Học Nghệ Thuật',productprice:55000,productdescribe:'Làm đĩ là một trong số những cuốn sách gây ra nhiều cuộc tranh luận trong hơn suốt nửa thế kỷ qua. Từ Nhất Linh, Thái Phỉ, Hoài Thanh trước đây đã có khá nhiều bài đăng trên các báo Tân văn, Tương lai.'},
			{img:'Mat Biec.jpg',productid:'vhnt.matbiec',productname:'Mắt Biếc',productauthor:'Nguyễn Nhật Ánh',productcategory:'Văn Học Nghệ Thuật',productprice:110000,productdescribe:'Mắt biếc là một tác phẩm được nhiều người bình chọn là hay nhất của nhà văn Nguyễn Nhật Ánh. Tác phẩm này cũng đã được dịch giả Kato Sakae dịch sang tiếng Nhật để giới thiệu với độc giả Nhật Bản.'},
			{img:'NhungTamLongCaoCa.jpg',productid:'vhnt.nhungtamlongcaoca',productname:'Những Tấm Lòng Cao Cả',productauthor:'Edmondo De Amicis',productcategory:'Văn Học Nghệ Thuật',productprice:80000,productdescribe:'Những tấm lòng cao cả là một cuốn tiểu thuyết trẻ em của nhà văn người Ý Edmondo De Amicis. Lấy bối cảnh trong lúc nước Ý đang thống nhất cũng như nói về đề tài yêu nước.'},
			{img:'OngGiaVaBienCa.jpg',productid:'vhnt.onggiavabienca',productname:'Ông Già Và Biển Cả',productauthor:'Ernest Hemingway',productcategory:'Văn Học Nghệ Thuật',productprice:28000,productdescribe:'Ông Già Và Biển Cả (tên tiếng Anh: The Old Man and the Sea) là một tiểu thuyết ngắn được Ernest Hemingway viết ở Cuba năm 1951 và xuất bản năm 1952. Tác phẩm là truyện ngắn dạng viễn tưởng và là một trong những đỉnh cao trong sự nghiệp sáng tác của nhà văn, đoạt giải Pulitzer năm 1953.'},
			{img:'SoDo.jpg',productid:'vhnt.sodo',productname:'Số Đỏ',productauthor:'Vũ Trọng Phụng',productcategory:'Văn Học Nghệ Thuật',productprice:65000,productdescribe:'Tôi không muốn lấy cái người ấy, vì nếu tôi lấy hắn, chắc hắn sẽ mọc sừng. Thí dụ một người như ông mà hỏi tôi thì còn nói gì! Đằng này hắn lại nhà quê, không biết yêu vợ như những người văn minh. Buồn lắm anh ạ.'},
			{img:'TatDen.jpg',productid:'vhnt.tatden',productname:'Tắt Đèn',productauthor:'Ngô Tất Tố',productcategory:'Văn Học Nghệ Thuật',productprice:89000,productdescribe:'Tắt đèn của nhà văn Ngô Tất Tố phản ánh rất chân thực cuộc sống khốn khổ của tầng lớp nông dân Việt Nam đầu thế kỷ XX dưới ách đô hộ của thực dân Pháp.'},
			{img:'ToiThayHoaVangTrenCoXanh.jpg',productid:'vhnt.toithayhoavangtrencoxanh',productname:'Tôi Thấy Hoa Vàng Trên Cỏ Xanh',productauthor:'Nguyễn Nhật Ánh',productcategory:'Văn Học Nghệ Thuật',productprice:125000,productdescribe:'“Tôi thấy hoa vàng trên cỏ xanh” truyện dài mới nhất của nhà văn vừa nhận giải văn chương ASEAN Nguyễn Nhật Ánh - đã được Nhà xuất bản Trẻ mua tác quyền và giới thiệu đến độc giả cả nước.'},
			{img:'TruyenKieu.jpg',productid:'vhnt.truyenkieu',productname:'Truyện Kiều',productauthor:'Nguyễn Du',productcategory:'Văn Học Nghệ Thuật',productprice:41000,productdescribe:'Tác phẩm Truyện Kiều, nguyên tên là Đoạn trường tân thanh, từ khi ra đời đến nay, khoảng 200 năm, trong lịch sử Văn học Việt Nam, chưa có tác phẩm nào được các nhà khảo cứu, phê bình, x uất bản quan tâm đến nó, từ nội dung, hình thức, lẫn văn bản và thời điểm sáng tác đặc biệt đến như vậy.'}												
		];
		localStorage.setItem('product',JSON.stringify(productarr));	
	}
}
var categoryarr=[];
function Category(){
	if (localStorage.getItem('category')==null){
		categoryarr=[
			{categoryid:'cnkt',categoryname:'Đời sống công nghệ và kỹ thuật'},
			{categoryid:'tl',categoryname:'Đời sống tâm lý'},
			{categoryid:'ln',categoryname:'Light Novel'},
			{categoryid:'tt',categoryname:'Trinh Thám'},
			{categoryid:'tttn',categoryname:'Truyện Tranh-Thiếu Nhi'},
			{categoryid:'tth',categoryname:'Tiểu Thuyết'},
			{categoryid:'vhnt',categoryname:'Văn Học Nghệ Thuật'},
		];
		localStorage.setItem('category',JSON.stringify(categoryarr));
	}
}
/*---------------------------Tài Khoản-----------------------------*/			
function showuser(){				
	if (localStorage.getItem('user')==null)
		return false;
	var userarr=JSON.parse(localStorage.getItem('user'));
	var k=Math.ceil(userarr.length/12);
	var s1='<div class="phantrang" id="sotrang">';
	for (var i=0;i<k;i++){
		s1+='<div id="'+(i+1)+'" onclick="Pageshowuser(\''+(i+1)+'\');doimau(\''+(i+1)+'\');">'+(i+1)+'</div>';
	}
	s1+='</div>';
	var s='<div class="tabletaikhoan"><div class="tabletaikhoan-tk">Mã Tài Khoản</div><div class="tabletaikhoan-tentk">Tên Tài Khoản</div><div class="tabletaikhoan-mk">Mật Khẩu</div><div class="tabletaikhoan-maquyen">Mã Quyền</div><div class="tabletaikhoan-chucnang">Chức Năng</div></div>';
	for (var i=0;i<userarr.length;i++){
		s+='<div class="account"><div class="tabletaikhoan-tk">'+userarr[i].nameid+'</div><div class="tabletaikhoan-tentk">'+userarr[i].name+'</div><div class="tabletaikhoan-mk">'+userarr[i].password+'</div><div class="tabletaikhoan-maquyen">'+userarr[i].power+'</div><div class="tabletaikhoan-chucnang"><input type="button" value="X" onclick="Deleteuser(\''+userarr[i].nameid+'\');" /><input type="button" style="width:50px" value="Edit" onclick="ShowEdituser(\''+userarr[i].nameid+'\');" /></div></div>';
		if (i%12==11)
			break;					
	}
	s+=s1;							
	document.getElementById('table').innerHTML=s;				
	ShowSearchuser();ShowAdduser();
}
function Pageshowuser(page){				
	if (localStorage.getItem('user')==null)
		return false;
	var userarr=JSON.parse(localStorage.getItem('user'));
	var k=Math.ceil(userarr.length/12);
	var s1='<div class="phantrang" id="sotrang">';
	for (var i=0;i<k;i++){
		s1+='<div id="'+(i+1)+'" onclick="Pageshowuser(\''+(i+1)+'\');doimau(\''+(i+1)+'\');">'+(i+1)+'</div>';
	}
	s1+='</div>';
	var b=0;				
	var s='<div class="tabletaikhoan"><div class="tabletaikhoan-tk">Mã Tài Khoản</div><div class="tabletaikhoan-tentk">Tên Tài Khoản</div><div class="tabletaikhoan-mk">Mật Khẩu</div><div class="tabletaikhoan-maquyen">Mã Quyền</div><div class="tabletaikhoan-chucnang">Chức Năng</div></div>';
	for (var i=0;i<userarr.length;i++){
		s+='<div class="account"><div class="tabletaikhoan-tk">'+userarr[i].nameid+'</div><div class="tabletaikhoan-tentk">'+userarr[i].name+'</div><div class="tabletaikhoan-mk">'+userarr[i].password+'</div><div class="tabletaikhoan-maquyen">'+userarr[i].power+'</div><div class="tabletaikhoan-chucnang"><input type="button" value="X" onclick="Deleteuser(\''+userarr[i].nameid+'\');" /><input type="button" style="width:50px" value="Edit" onclick="ShowEdituser(\''+userarr[i].nameid+'\');" /></div></div>';					
		if (i%12==11 || i==userarr.length-1){
			b++;
			if (b==page){							
				s+=s1;
				document.getElementById('table').innerHTML=s;
				break;
			}
			s='<div class="tabletaikhoan"><div class="tabletaikhoan-tk">Mã Tài Khoản</div><div class="tabletaikhoan-tentk">Tên Tài Khoản</div><div class="tabletaikhoan-mk">Mật Khẩu</div><div class="tabletaikhoan-maquyen">Mã Quyền</div><div class="tabletaikhoan-chucnang">Chức Năng</div></div>';
		}
	}				
	ShowSearchuser();ShowAdduser();
}
function ShowSearchuser(){
	var s='<div class="tkiem">Search</div><div class="timtenma"><br /><div>Tên tài khoản<br /><input type="text" id="timten1" placeholder="Tên cần tìm" /></div><div>Mã tài khoản<br /><input type="text" id="timma1" placeholder="Mã cần tìm" /></div></div><div class="mqtt" style="margin-left:110px;"><br /><div style="font-size:15px;">Mã Quyền <br /><select class="selectmqtt" id="maquyen1" style="margin-top:10px;"><option>Mã quyền</option><option>Admin</option><option>NV</option><option>QL</option><option>KH</option></select></div><div style="margin-left:80px;font-size:15px;">Tình trạng<br /><select class="selectmqtt" id="tinhtrang1" style="margin-top:10px;"><option>Tình trạng</option><option>ON</option><option>OFF</option></select></div></div><input type="button" value="Tìm kiếm" class="nuttimtk" onclick="Checktimkiem();" />';
	document.getElementById('Timkiem').style.display='block';
	document.getElementById('Timkiem').innerHTML=s;
}
function ShowAdduser(){
	var s='<div id="them">Add</div><div class="divform"><form method="get" onsubmit="return Checkdata();"><div class="formleft"><div><p style="font-size:18px;">Tên đăng nhập</p><input type="text" id="tendn" placeholder="Tên đăng nhập" style="width:200px; height:20px;" /><span id="datatendn"></span><p style="font-size:18px;">Password</p><input type="password" id="matkhau" placeholder="Password" style="width:200px; height:20px;" /><span id="datamatkhau"></span><p style="font-size:18px;">Họ và tên</p><input type="text" id="hovaten" placeholder="Họ và tên" style="width:200px; height:20px;" /><span id="datahovaten"></span><p style="font-size:15px;">Giới tính</p><input type="radio" id="gtnam" name="txtgioitinh" /> Nam<input type="radio" id="gtnu" name="txtgioitinh" /> Nữ<span id="datagioitinh"></span></div></div><div class="formright"><div id="divformright"><p style="font-size:18px;">Ngày sinh</p><input type="text" id="ngaysinh" placeholder="VD: 01/02/2001" style="width:200px; height:20px;" /><span id="datangaysinh"></span><p style="font-size:18px;">Số điện thoại</p><input type="text" id="phone" placeholder="Number" style="width:200px; height:20px;" /><span id="dataphone"></span><p style="font-size:18px;">Địa chỉ</p><textarea id="txtdc" placeholder="Nhập địa chỉ" ></textarea><span id="datatxtdc"></span><div class="mqtt"><br /><div style="font-size:15px;">Mã Quyền <br /><select class="selectmqtt" id="maquyen" style="margin-top:6px;"><option>Admin</option><option>NV</option><option>QL</option><option>KH</option></select></div><div style="margin-left:30px;font-size:15px;">Tình trạng<br /><select class="selectmqtt" id="tinhtrang" style="margin-top:6px;"><option>ON</option><option>OFF</option></select></div></div></div></div><input type="submit" value="Thêm" class="nutthem" onclick="Adduser();" /></form></div>';
	document.getElementById('Them').style.display='block';
	document.getElementById('Them').innerHTML=s;
}
function Status(){				
	var userarr=JSON.parse(localStorage.getItem('user'));
	for (var i=0;i<userarr.length;i++){
		if (userarr[i].status==true){
			var x=document.getElementsByClassName('stt');
			x[i].checked='checked';						
		}
	}				
}
function Checkstt(user1){
	var userarr=JSON.parse(localStorage.getItem('user'));
	for (var i=0;i<userarr.length;i++){
		if (userarr[i].nameid==user1){						
			if (document.getElementById('stt1').checked==true){							
				userarr[i].status=false;							
			}
			else{
				userarr[i].status=true;							
			}
		}
	}
	localStorage.setItem('user',JSON.stringify(userarr));
}
function Adduser(){
	if (Checkdata()==false)
		return false;				
	var x=document.getElementById('tendn').value;				
	var x1=document.getElementById('matkhau').value;
	var x2=document.getElementById('hovaten').value;
	var x3;
	if (document.getElementById('gtnam').checked==true)
		x3='Nam';
	if (document.getElementById('gtnu').checked==true)
		x3='Nữ';
	var x4=document.getElementById('ngaysinh').value;
	var x5=document.getElementById('phone').value;
	var x6=document.getElementById('txtdc').value;
	var x7;
	if (document.getElementById('maquyen').value=='Admin')
		x7='1';
	if (document.getElementById('maquyen').value=='QL')
		x7='2';
	if (document.getElementById('maquyen').value=='NV')
		x7='3';
	if (document.getElementById('maquyen').value=='KH')
		x7='0';
	var x8;
	if (document.getElementById('tinhtrang').value=='ON')
		x8=true;
	if (document.getElementById('tinhtrang').value=='OFF')
		x8=false;								
	var userarr=JSON.parse(localStorage.getItem('user'));
	var user={nameid:x,password:x1,name:x2,sex:x3,dateofbirth:x4,phone:x5,address:x6,power:x7,status:x8};
	userarr.push(user);
	localStorage.setItem('user',JSON.stringify(userarr));
	showuser();
}
function Deleteuser(nameiddl){
	var userarr=JSON.parse(localStorage.getItem('user'));
	for (var i=0;i<userarr.length;i++){
		if (userarr[i].nameid==nameiddl){
			if (confirm('Bạn có muốn xóa tài khoản này?')){
				userarr.splice(i,1);
			}
		}
	}
	localStorage.setItem('user',JSON.stringify(userarr));
	showuser();
}
function Checkdata(){							
	var userarr=JSON.parse(localStorage.getItem('user'));
	for (var i=0;i<userarr.length;i++)
		if (userarr[i].nameid==document.getElementById('tendn').value){
			document.getElementById('datatendn').innerHTML='<br />Đã có người dùng';					
			document.getElementById('tendn').focus();
			return false;
		}
	if(document.getElementById('tendn').value==''){					
		document.getElementById('datatendn').innerHTML='<br />Nhập tên đăng nhập';					
		document.getElementById('tendn').focus();
		return false;
	}
	if(document.getElementById('matkhau').value==''){
		document.getElementById('datamatkhau').innerHTML='<br />Nhập mật khẩu';
		document.getElementById('matkhau').focus();
		return false;
	}
	if(document.getElementById('hovaten').value==''){
		document.getElementById('datahovaten').innerHTML='<br />Nhập họ và tên';
		document.getElementById('hovaten').focus();
		return false;
	}
	if (document.getElementById('gtnam').checked==false && document.getElementById('gtnu').checked==false){
		document.getElementById('datagioitinh').innerHTML='<br />Chọn giới tính';
		return false;
	}
	if(document.getElementById('ngaysinh').value==''){
		document.getElementById('datangaysinh').innerHTML='<br />Nhập ngày sinh';
		document.getElementById('ngaysinh').focus();
		return false;
	}
	var x=document.getElementById('ngaysinh').value;
	var x1=x.split("/");
	if (x1==x){
		document.getElementById('datangaysinh').innerHTML='<br />Nhập sai dữ liệu';
		document.getElementById('ngaysinh').focus();
		return false;
	}
	var k,k1,k2;
	k=parseInt(x1[0]);
	k1=parseInt(x1[1]);
	k2=parseInt(x1[2]);				
	if (isNaN(k) || isNaN(k1) || isNaN(k2)){				
		document.getElementById('datangaysinh').innerHTML='<br />Nhập sai dữ liệu';
		document.getElementById('ngaysinh').focus();
		return false;
	}
	if (k>31 || k<1 || k1>12 || k1<1){									
		document.getElementById('datangaysinh').innerHTML='<br />Nhập sai dữ liệu';
		document.getElementById('ngaysinh').focus();
		return false;					
	}
	if (k1==2){					
		if (k2%4==0&&k2%100!=0 || k2%400==0){						
			if (k>29){							
				document.getElementById('datangaysinh').innerHTML='<br />Nhập sai dữ liệu ngày';
				document.getElementById('ngaysinh').focus();
				return false;
			}
		}
		else{						
			if (k>28){
				document.getElementById('datangaysinh').innerHTML='<br />Nhập sai dữ liệu ngày';
				document.getElementById('ngaysinh').focus();
				return false;
			}
		}
	}
	if(document.getElementById('phone').value==''){
		document.getElementById('dataphone').innerHTML='<br />Nhập số điện thoại';
		document.getElementById('phone').focus();
		return false;
	}
	var l=document.getElementById('phone').value;
	var l1=parseInt(l);
	if (isNaN(l1)){
		document.getElementById('dataphone').innerHTML='<br />Nhập sai dữ liệu';
		document.getElementById('phone').focus();
		return false;
	}
	if (l.length<10 || l.length>10){
		document.getElementById('dataphone').innerHTML='<br />Chỉ được nhập 10 số';
		document.getElementById('phone').focus();
		return false;
	}
	if(document.getElementById('txtdc').value==''){			
		document.getElementById('datatxtdc').innerHTML='<br />Nhập địa chỉ';
		document.getElementById('txtdc').focus();
		return false;
	}
}						
function Checktimkiem(){
	var check=[];
	if (localStorage.getItem('check')!=null)
		localStorage.removeItem('check');				
	var userarr=JSON.parse(localStorage.getItem('user'));				
	var x=document.getElementById('timten1').value;
	var x1=document.getElementById('timma1').value;
	var x2;
	var x3=document.getElementById('tinhtrang1').value;
	if (document.getElementById('maquyen1').value=='Admin')
		x2='1';
	if (document.getElementById('maquyen1').value=='QL')
		x2='2';
	if (document.getElementById('maquyen1').value=='NV')
		x2='3';
	if (document.getElementById('maquyen1').value=='KH')
		x2='0';
	if (x=='')
		x=null;
	if (x1=='')
		x1=null;
	if (x2=='Mã quyền')
		x2=null;
	if (x3=='Tình trạng')
		x3=null;				
	var kt1=0;
	if (x==null&&x1==null&&x2==null&&x3==null){
		alert('Chưa nhập dữ liệu cần tìm');
		return false;
	}
	for (var i=0;i<userarr.length;i++){
		if (x==null&& userarr[i].nameid==x1 && userarr[i].status==true&&x3=='ON' && userarr[i].power==x2){
			kt1++;
			check.push(userarr[i]);
		}
		if (x1==null && userarr[i].name==x && userarr[i].status==true&&x3=='ON' && userarr[i].power==x2){
			kt1++;
			check.push(userarr[i]);
		}						
		if (x==userarr[i].name && userarr[i].nameid==x1 && userarr[i].status==true&&x3=='ON' && x2==null){
			kt1++;
			check.push(userarr[i]);
		}						
		if (x==userarr[i].name && userarr[i].nameid==x1 && x3==null && userarr[i].power==x2){
			kt1++;
			check.push(userarr[i]);
		}						
		if (x==null && userarr[i].nameid==x1 && userarr[i].status==false&&x3=='OFF' && userarr[i].power==x2){
			kt1++;
			check.push(userarr[i]);
		}						
		if (x1==null && userarr[i].name==x && userarr[i].status==false&&x3=='OFF' && userarr[i].power==x2){
			kt1++;
			check.push(userarr[i]);
		}						
		if (x==userarr[i].name && userarr[i].nameid==x1 && userarr[i].status==false&&x3=='OFF' && x2==null){
			kt1++;
			check.push(userarr[i]);
		}					
		if (x==null && x1==null && userarr[i].status==true&&x3=='ON' && userarr[i].power==x2){
			kt1++;
			check.push(userarr[i]);
		}						
		if (x==null && x1==null && userarr[i].status==false&&x3=='OFF' && userarr[i].power==x2){
			kt1++;
			check.push(userarr[i]);
		}						
		if (x==null && userarr[i].nameid==x1 && userarr[i].status==true&&x3=='ON' && x2==null){
			kt1++;
			check.push(userarr[i]);
		}						
		if (x==null && userarr[i].nameid==x1 && userarr[i].status==false&&x3=='OFF' && x2==null){
			kt1++;
			check.push(userarr[i]);
		}						
		if (x==null && x1==userarr[i].nameid && x3==null && userarr[i].power==x2){
			kt1++;
			check.push(userarr[i]);
		}						
		if (x==userarr[i].name && x1==null && userarr[i].status==true&&x3=='ON' && x2==null){
			kt1++;
			check.push(userarr[i]);
		}						
		if (x==userarr[i].name && x1==null && userarr[i].status==false&&x3=='OFF' && x2==null){
			kt1++;
			check.push(userarr[i]);
		}						
		if (x==userarr[i].name&& x1==null && x3==null && userarr[i].power==x2){
			kt1++;
			check.push(userarr[i]);
		}																
		if (x==userarr[i].name && x1==null && x2==null && x3==null){
			kt1++;
			check.push(userarr[i]);
		}
		if (x1==userarr[i].nameid && x==null && x2==null && x3==null){
			kt1++;
			check.push(userarr[i]);
		}
		if (userarr[i].power==x2 && x==null && x1==null && x3==null){
			kt1++;
			check.push(userarr[i]);
		}
		if (userarr[i].status==true&&x3=='ON' && x==null && x2==null && x1==null){
			kt1++;
			check.push(userarr[i]);
		}
		if (userarr[i].status==false&&x3=='OFF' && x==null && x2==null && x1==null){
			kt1++;
			check.push(userarr[i]);
		}
	}
	if (kt1==0){
		alert('Không tìm thấy dữ liệu cần tìm');
		return false;
	}
	var k=Math.ceil(kt1/12);
	var s1='<div class="phantrang" id="sotrang">';
	for (var i=0;i<k;i++){
		s1+='<div id="'+(i+1)+'" onclick="Pageshowcheckuser(\''+(i+1)+'\');doimau(\''+(i+1)+'\');">'+(i+1)+'</div>';
	}
	s1+='</div>';				
	var s='<div class="tabletaikhoan"><div class="tabletaikhoan-tk">Mã Tài Khoản</div><div class="tabletaikhoan-tentk">Tên Tài Khoản</div><div class="tabletaikhoan-mk">Mật Khẩu</div><div class="tabletaikhoan-maquyen">Mã Quyền</div><div class="tabletaikhoan-chucnang">Chức Năng</div></div>';				
	for (var i=0;i<check.length;i++){
			s+='<div class="account"><div class="tabletaikhoan-tk">'+check[i].nameid+'</div><div class="tabletaikhoan-tentk">'+check[i].name+'</div><div class="tabletaikhoan-mk">'+check[i].password+'</div><div class="tabletaikhoan-maquyen">'+check[i].power+'</div><div class="tabletaikhoan-chucnang"><input type="button" value="X" onclick="Deleteuser(\''+check[i].nameid+'\');" /><input type="button" style="width:50px" value="Edit" onclick="ShowEdituser(\''+check[i].nameid+'\');" /></div></div>';					
		if (i%12==11)
			break;					
	}
	s+=s1;
	document.getElementById('table').innerHTML=s;
	localStorage.setItem('check',JSON.stringify(check));
	ShowSearchuser();ShowAdduser();								
}
function Pageshowcheckuser(page){														
	var check=JSON.parse(localStorage.getItem('check'));				
	var k=Math.ceil(check.length/12);
	var s1='<div class="phantrang" id="sotrang">';
	for (var i=0;i<k;i++){
		s1+='<div id="'+(i+1)+'" onclick="Pageshowcheckuser(\''+(i+1)+'\');doimau(\''+(i+1)+'\');">'+(i+1)+'</div>';
	}
	s1+='</div>';
	var b=0;
	var s='<div class="tabletaikhoan"><div class="tabletaikhoan-tk">Mã Tài Khoản</div><div class="tabletaikhoan-tentk">Tên Tài Khoản</div><div class="tabletaikhoan-mk">Mật Khẩu</div><div class="tabletaikhoan-maquyen">Mã Quyền</div><div class="tabletaikhoan-chucnang">Chức Năng</div></div>';				
	for (var i=0;i<check.length;i++){					
			s+='<div class="account"><div class="tabletaikhoan-tk">'+check[i].nameid+'</div><div class="tabletaikhoan-tentk">'+check[i].name+'</div><div class="tabletaikhoan-mk">'+check[i].password+'</div><div class="tabletaikhoan-maquyen">'+check[i].power+'</div><div class="tabletaikhoan-chucnang"><input type="button" value="X" onclick="Deleteuser(\''+check[i].nameid+'\');" /><input type="button" style="width:50px" value="Edit" onclick="ShowEdituser(\''+check[i].nameid+'\');" /></div></div>';
		
		if (i%12==11 || i==check.length-1){
			b++;
			if (b==page){														
				s+=s1;
				document.getElementById('table').innerHTML=s;
				break;
			}
			s='<div class="tabletaikhoan"><div class="tabletaikhoan-tk">Mã Tài Khoản</div><div class="tabletaikhoan-tentk">Tên Tài Khoản</div><div class="tabletaikhoan-mk">Mật Khẩu</div><div class="tabletaikhoan-maquyen">Mã Quyền</div><div class="tabletaikhoan-chucnang">Chức Năng</div></div>';
		}					
	}				
	ShowSearchuser();ShowAdduser();
}
function HideEdit(){
	document.getElementById('Edit').style.display='none';
}
function ShowEdituser(user1){
	document.getElementById('Edit').style.display='block';
	var userarr=JSON.parse(localStorage.getItem('user'));
	var s='';
	for (var i=0;i<userarr.length;i++){
		if (userarr[i].nameid==user1){
			s='<form><input type="button" value="X" id="tatedit" onclick="HideEdit();" /><p class="p1">Mã tài khoản</p><input type="text" id="edittendn" value="'+userarr[i].nameid+'" class="input1" /><p class="p1">Tên tài khoản</p><input type="text" id="edithovaten" value="'+userarr[i].name+'" class="input1" /><p class="p1" style="margin-left:210px;">Password</p><input type="text" id="editmatkhau" value="'+userarr[i].password+'" class="input1" />';
			if (userarr[i].power=='1')
				s+='<br /><div><p>Mã Quyền</p><select class="selectmqtt" id="maquyen2"><option selected="selected">Admin</option><option>NV</option><option>QL</option><option>KH</option></select></div>';
			if (userarr[i].power=='2')
				s+='<br /><div><p>Mã Quyền</p><select class="selectmqtt" id="maquyen2"><option>Admin</option><option>NV</option><option selected="selected">QL</option><option>KH</option></select></div>';
		if (userarr[i].power=='3')
				s+='<br /><div><p>Mã Quyền</p><select class="selectmqtt" id="maquyen2"><option>Admin</option><option selected="selected">NV</option><option>QL</option><option>KH</option></select></div>';
		if (userarr[i].power=='0')
				s+='<br /><div><p>Mã Quyền</p><select class="selectmqtt" id="maquyen2"><option>Admin</option><option>NV</option><option>QL</option><option selected="selected">KH</option></select></div>';
		if (userarr[i].status==true)
			s+='<div style="margin-left:50px;"><p>Tình trạng</p><label class="switch"><input type="checkbox" id="editstt" checked="checked" class="stt" /><span class="on"></span></label></div><br /><input type="button" value="OK" class="edit1" onclick="Edituser(\''+userarr[i].nameid+'\');showuser();" /></form>';
		if (userarr[i].status==false)
			s+='<div style="margin-left:50px;"><p>Tình trạng</p><label class="switch"><input type="checkbox" id="editstt" class="stt" /><span class="on"></span></label></div><br /><input type="button" value="OK" class="edit1" onclick="Edituser(\''+userarr[i].nameid+'\');showuser();" /></form>';
		}
	}
	document.getElementById('Edit').innerHTML=s;
}
function Edituser(user1){
	var userarr=JSON.parse(localStorage.getItem('user'));
	var x=document.getElementById('edittendn').value;
	var x1=document.getElementById('edithovaten').value;
	var x2=document.getElementById('editmatkhau').value;
	var x3=document.getElementById('maquyen2').value;
	var x4=document.getElementById('editstt').checked;
	for (var i=0;i<userarr.length;i++){
		if (userarr[i].nameid==user1){
			userarr[i].nameid=x;
			userarr[i].name=x1;
			userarr[i].password=x2;
			if (x3=='Admin')
				userarr[i].power='1';
			if (x3=='QL')
				userarr[i].power='2';
			if (x3=='NV')
				userarr[i].power='3';
			if (x3=='KH')
				userarr[i].power='0';
			if (x4==true)
				userarr[i].status=true;
			if (x4==false)
				userarr[i].status=false;
		}
	}				
	localStorage.setItem('user',JSON.stringify(userarr));
	document.getElementById('Edit').style.display='none';																
}
/*---------------------------Khách Hàng-----------------------------*/			
function showuser1(){				
	if (localStorage.getItem('user')==null)
		return false;
	var userarr=JSON.parse(localStorage.getItem('user'));				
	var k1=0,k2=0;
	for (var i=0;i<userarr.length;i++){
		if (userarr[i].power=='0')
			k2++;
	}			
	var s='<div class="customer-line">';
	for (var i=0;i<userarr.length;i++){
		if (userarr[i].power=='0'){						
			k1++;						
			s+='<div class="customer"><p class="thephovaten">Họ và tên</p><div class="customer-hovaten">'+userarr[i].name+'</div><p class="thepngaysinh">Ngày sinh</p><div class="customer-ngaysinh">'+userarr[i].dateofbirth+'</div><br /><span class="thepgioitinh">Giới tính</span><span class="thepphone">Số điện thoại</span><br /><div class="customer-gioitinh">'+userarr[i].sex+'</div><div class="customer-phone">'+userarr[i].phone+'</div><p class="thepdiachi">Địa chỉ</p><textarea class="customer-diachi" rows="2" readonly="readonly">'+userarr[i].address+'</textarea><br /><input type="button" value="X" onclick="Deleteuser1(\''+userarr[i].nameid+'\');" /><input type="button" value="Edit" onclick="ShowEdituser1(\''+userarr[i].nameid+'\');" /></div>';
			if ((k1-1)%3==2 || i==userarr.length-1){
				if (i!=userarr.length-1){
					if ((k1-1)%6!=5){
						s+='</div><div class="customer-line">';								
					}
					else
						s+='</div>';
				}
				else{
					s+='</div>';							
				}
			}
			if ((k1-1)%6==5)
				break;						
			}											
	}
	var k=Math.ceil(k2/6);
	var s1='<div class="phantrang" id="sotrang">';
	for (var i=0;i<k;i++){
		s1+='<div id="'+(i+1)+'" onclick="Pageshowuser1(\''+(i+1)+'\');doimau(\''+(i+1)+'\');">'+(i+1)+'</div>';
	}
	s1+='</div>';
	s+=s1;				
	document.getElementById('table').innerHTML=s;
	ShowsearchKH();ShowAdduser1();
}
function Pageshowuser1(page){				
	if (localStorage.getItem('user')==null)
		return false;
	var userarr=JSON.parse(localStorage.getItem('user'));			
	var k1=0,k2=0;
	var b=0;
	for (var i=0;i<userarr.length;i++){
		if (userarr[i].power=='0')
			k2++;
	}
	var s='<div class="customer-line">';
	for (var i=0;i<userarr.length;i++){
		if (userarr[i].power=='0'){
			k1++;
			s+='<div class="customer"><p class="thephovaten">Họ và tên</p><div class="customer-hovaten">'+userarr[i].name+'</div><p class="thepngaysinh">Ngày sinh</p><div class="customer-ngaysinh">'+userarr[i].dateofbirth+'</div><br /><span class="thepgioitinh">Giới tính</span><span class="thepphone">Số điện thoại</span><br /><div class="customer-gioitinh">'+userarr[i].sex+'</div><div class="customer-phone">'+userarr[i].phone+'</div><p class="thepdiachi">Địa chỉ</p><textarea class="customer-diachi" rows="2" readonly="readonly">'+userarr[i].address+'</textarea><br /><input type="button" value="X" onclick="Deleteuser1(\''+userarr[i].nameid+'\');" /><input type="button" value="Edit" onclick="ShowEdituser1(\''+userarr[i].nameid+'\');" /></div>';
			if ((k1-1)%3==2 || i==userarr.length-1){
				if (i!=userarr.length-1){
					if ((k1-1)%6!=5){
						s+='</div><div class="customer-line">';								
					}
					else{
						s+='</div>';								
					}
				}
				else{							
					s+='</div>';							
				}
			}
			if ((k1-1)%6==5 || i==userarr.length-1){
				b++;
				if (b==page){																						
					break;							
				}
				s='<div class="customer-line">';
			}						
		}					
	}
	var k=Math.ceil(k2/6);
	var s1='<div class="phantrang" id="sotrang">';
	for (var i=0;i<k;i++){
		s1+='<div id="'+(i+1)+'" onclick="Pageshowuser1(\''+(i+1)+'\');doimau(\''+(i+1)+'\');">'+(i+1)+'</div>';
	}
	s1+='</div>';
	s+=s1;
	document.getElementById('table').innerHTML=s;				
	ShowsearchKH();ShowAdduser1();
}
function ShowsearchKH(){
	var s='<div class="tkiem">Search</div><div class="customer-timkiem"><div class="customer-tkiem-hovaten" style="margin-top:40px">Họ và tên: <input type="text" id="tkiem-datahovaten" placeholder="Nhập họ và tên" /></div><div id="tkiem-ngaysinh" class="customer-tkiem-ngaysinh"></div><div class="customer-tkiem-gioitinh">Giới tính</div><div class="customer-tkiem-phone" style="margin-left:145px;">Số điện thoại</div><br /><div class="customer-tkiem-datagioitinh"><select id="tkiem-datagioitinh"><option>Chọn</option><option>Nam</option><option>Nữ</option></select></div><div class="customer-tkiem-dataphone"><input type="text" id="tkiem-dataphone" placeholder="Nhập số điện thoại" /></div></div><input type="button" value="Tìm kiếm" class="nuttimtk" onclick="ChecktkiemKH();"  />';
	document.getElementById('Timkiem').style.display='block';
	document.getElementById('Timkiem').innerHTML=s;
	tikiemngay();
}
function ShowAdduser1(){
	var s='<div id="them">Add</div><div class="divform"><form method="get" onsubmit="return Checkdata();"><div class="formleft"><div><p style="font-size:18px;">Tên đăng nhập</p><input type="text" id="tendn" placeholder="Tên đăng nhập" style="width:200px; height:20px;" /><span id="datatendn"></span><p style="font-size:18px;">Password</p><input type="password" id="matkhau" placeholder="Password" style="width:200px; height:20px;" /><span id="datamatkhau"></span><p style="font-size:18px;">Họ và tên</p><input type="text" id="hovaten" placeholder="Họ và tên" style="width:200px; height:20px;" /><span id="datahovaten"></span><p style="font-size:15px;">Giới tính</p><input type="radio" id="gtnam" name="txtgioitinh" /> Nam<input type="radio" id="gtnu" name="txtgioitinh" /> Nữ<span id="datagioitinh"></span></div></div><div class="formright"><div id="divformright"><p style="font-size:18px;">Ngày sinh</p><input type="text" id="ngaysinh" placeholder="VD: 01/02/2001" style="width:200px; height:20px;" /><span id="datangaysinh"></span><p style="font-size:18px;">Số điện thoại</p><input type="text" id="phone" placeholder="Number" style="width:200px; height:20px;" /><span id="dataphone"></span><p style="font-size:18px;">Địa chỉ</p><textarea id="txtdc" placeholder="Nhập địa chỉ" ></textarea><span id="datatxtdc"></span><div class="mqtt"><br /><div style="font-size:15px;">Mã Quyền <br /><select class="selectmqtt" id="maquyen" style="margin-top:6px;"><option>Admin</option><option>NV</option><option>QL</option><option>KH</option></select></div><div style="margin-left:30px;font-size:15px;">Tình trạng<br /><select class="selectmqtt" id="tinhtrang" style="margin-top:6px;"><option>ON</option><option>OFF</option></select></div></div></div></div><input type="submit" value="Thêm" class="nutthem" onclick="Adduser1();" /></form></div>';
	document.getElementById('Them').style.display='block';
	document.getElementById('Them').innerHTML=s;
}
function Adduser1(){
	if (Checkdata()==false)
		return false;				
	var x=document.getElementById('tendn').value;				
	var x1=document.getElementById('matkhau').value;
	var x2=document.getElementById('hovaten').value;
	var x3;
	if (document.getElementById('gtnam').checked==true)
		x3='Nam';
	if (document.getElementById('gtnu').checked==true)
		x3='Nữ';
	var x4=document.getElementById('ngaysinh').value;
	var x5=document.getElementById('phone').value;
	var x6=document.getElementById('txtdc').value;
	var x7;
	if (document.getElementById('maquyen').value=='Admin')
		x7='1';
	if (document.getElementById('maquyen').value=='QL')
		x7='2';
	if (document.getElementById('maquyen').value=='NV')
		x7='3';
	if (document.getElementById('maquyen').value=='KH')
		x7='0';
	var x8;
	if (document.getElementById('tinhtrang').value=='ON')
		x8=true;
	if (document.getElementById('tinhtrang').value=='OFF')
		x8=false;								
	var userarr=JSON.parse(localStorage.getItem('user'));
	var user={nameid:x,password:x1,name:x2,sex:x3,dateofbirth:x4,phone:x5,address:x6,power:x7,status:x8};
	userarr.push(user);
	localStorage.setItem('user',JSON.stringify(userarr));
	showuser1();
}
function Deleteuser1(nameiddl){
	var userarr=JSON.parse(localStorage.getItem('user'));
	for (var i=0;i<userarr.length;i++){
		if (userarr[i].nameid==nameiddl){
			if (confirm('Bạn có muốn xóa tài khoản này?')){
				userarr.splice(i,1);
			}
		}
	}
	localStorage.setItem('user',JSON.stringify(userarr));
	showuser1();
}
function HideEdit1(){
	document.getElementById('Edit1').style.display='none';
}
function ShowEdituser1(user1){
	document.getElementById('Edit1').style.display='block';
	var userarr=JSON.parse(localStorage.getItem('user'));
	var s='';
	for (var i=0;i<userarr.length;i++){
		if(userarr[i].nameid==user1){
			s='<input type="button" value="X" id="tatedit" onclick="HideEdit1();" /><p class="p1" style="margin-left:210px;">Họ và tên</p><input type="text" value="'+userarr[i].name+'" id="edithovaten" class="input1" /><p class="p1" style="margin-left:210px;">Ngày sinh</p><input type="text" value="'+userarr[i].dateofbirth+'" id="editngaysinh" class="input1" /><p class="p1" style="margin-left:205px;">Số điện thoại</p><input type="text" value="'+userarr[i].phone+'" id="editphone" class="input1" /><p class="p1" style="margin-left:220px;">Địa chỉ</p><textarea class="input1" style="height:50px;" id="editdc">'+userarr[i].address+'</textarea>';
			if (userarr[i].sex=='Nam')
				s+='<p class="p1" style="margin-left:210px;">Giới tính</p><input type="radio" id="gtnam1" checked="checked" name="txtgioitinh1" style="margin-left:200px;" /> Nam<input type="radio" id="gtnu1" name="txtgioitinh1" /> Nữ<input type="button" value="OK" class="edit1" onclick="Edituser1(\''+userarr[i].nameid+'\');" />';
			if(userarr[i].sex=='Nữ')
				s+='<p class="p1" style="margin-left:210px;">Giới tính</p><input type="radio" id="gtnam1" name="txtgioitinh1" style="margin-left:200px;" /> Nam<input type="radio" id="gtnu1" checked="checked" name="txtgioitinh1" /> Nữ<input type="button" value="OK" class="edit1" onclick="Edituser1(\''+userarr[i].nameid+'\');" />';
		}
	}
	document.getElementById('Edit1').innerHTML=s;
}
function Edituser1(user1){
	var userarr=JSON.parse(localStorage.getItem('user'));
	var x=document.getElementById('edithovaten').value;
	var x1=document.getElementById('editngaysinh').value;
	var x2=document.getElementById('editphone').value;
	var x3=document.getElementById('editdc').value;				
	for (var i=0;i<userarr.length;i++){
		if (userarr[i].nameid==user1){
			userarr[i].name=x;
			userarr[i].dateofbirth=x1;
			userarr[i].phone=x2;
			userarr[i].address=x3;
			if (document.getElementById('gtnam1').checked==true)
				userarr[i].sex='Nam';
			if (document.getElementById('gtnu1').checked==true)
				userarr[i].sex='Nữ';
		}
	}				
	localStorage.setItem('user',JSON.stringify(userarr));
	document.getElementById('Edit1').style.display='none';
	showuser1();				
}
function ChecktkiemKH(){
	var check=[];
	if (localStorage.getItem('check')!=null){					
		localStorage.removeItem('check');
	}
	var x1=document.getElementById('tkiem-datahovaten').value;
	var x2=document.getElementById('tkiem-datangaysinh').value;
	var x3=document.getElementById('tkiem-datathangsinh').value;
	var x4=document.getElementById('tkiem-datanamsinh').value;
	var x5=document.getElementById('tkiem-datagioitinh').value;
	var x6=document.getElementById('tkiem-dataphone').value;
	if (x2=='1'||x2=='2'||x2=='3'||x2=='4'||x2=='5'||x2=='6'||x2=='7'||x2=='8'||x2=='9')
		x2='0'+x2;
	if (x3=='1'||x3=='2'||x3=='3'||x3=='4'||x3=='5'||x3=='6'||x3=='7'||x3=='8'||x3=='9')
		x3='0'+x3;
	if (x3=='02'){
		var a=parseInt(x4);
		if (a%4==0 && a%100!=0 || a%400==0 || x4=='Năm')
			if (x2=='30' || x2=='31')
				alert('Tìm kiếm không phù hợp');
		else
			if (x2=='29' || x2=='30' || x2=='31')
				alert('Tìm kiếm không phù hợp');
	}
	if (x1=='')
		x1=null;
	if (x2=='Ngày')
		x2=null;
	if (x3=='Tháng')
		x3=null;
	if (x4=='Năm')
		x4=null;
	if (x5=='Chọn')
		x5=null;
	if (x6=='')
		x6=null;
	if (x1==null&&x2==null&&x3==null&&x4==null&&x5==null&&x6==null){
		alert('Chưa nhập dữ liệu cần tìm');
		return false;
	}
	var userarr=JSON.parse(localStorage.getItem('user'));
	var k1=0;
	for (var i=0;i<userarr.length;i++){
		if (userarr[i].power=='0'){
			var kt=userarr[i].dateofbirth.split("/");						
			if (x1==userarr[i].name&&x2==null&&x3==null&&x4==null&&x5==null&&x6==null){													
				k1++;
				check.push(userarr[i]);													
			}
			if (x1==null&&x2==kt[0]&&x3==null&&x4==null&&x5==null&&x6==null){													
				k1++;
				check.push(userarr[i]);													
			}
			if (x1==null&&x2==null&&x3==kt[1]&&x4==null&&x5==null&&x6==null){													
				k1++;
				check.push(userarr[i]);													
			}
			if (x1==null&&x2==null&&x3==null&&x4==kt[2]&&x5==null&&x6==null){													
				k1++;					
				check.push(userarr[i]);								
			}
			if (x1==null&&x2==null&&x3==null&&x4==null&&userarr[i].sex==x5&&x6==null){																				
				k1++;					
				check.push(userarr[i]);								
			}						
			if (x1==null&&x2==null&&x3==null&&x4==null&&x5==null&&x6==userarr[i].phone){													
				k1++;					
				check.push(userarr[i]);								
			}
			if (x1==userarr[i].name&&x2==null&&x3==null&&x4==null&&x5==null&&x6==userarr[i].phone){																			
				k1++;					
				check.push(userarr[i]);								
			}
			if (x1==null&&x2==kt[0]&&x3==kt[1]&&x4==null&&x5==null&&x6==null){													
				k1++;					
				check.push(userarr[i]);								
			}
			if (x1==null&&x2==kt[0]&&x3==kt[1]&&x4==kt[2]&&x5==null&&x6==null){													
				k1++;					
				check.push(userarr[i]);								
			}
			if (x1==null&&x2==kt[0]&&x3==null&&x4==kt[2]&&x5==null&&x6==null){													
				k1++;					
				check.push(userarr[i]);								
			}
			if (x1==null&&x2==null&&x3==kt[1]&&x4==kt[2]&&x5==null&&x6==null){													
				k1++;					
				check.push(userarr[i]);								
			}									
		}
	}
	if (k1==0){
		alert('Không tìm thấy dữ liệu cần tìm');
		return false;
	}
	var s='<div class="customer-line">';
	for (var i=0;i<check.length;i++){																													
				s+='<div class="customer"><p class="thephovaten">Họ và tên</p><div class="customer-hovaten">'+check[i].name+'</div><p class="thepngaysinh">Ngày sinh</p><div class="customer-ngaysinh">'+check[i].dateofbirth+'</div><br /><span class="thepgioitinh">Giới tính</span><span class="thepphone">Số điện thoại</span><br /><div class="customer-gioitinh">'+check[i].sex+'</div><div class="customer-phone">'+check[i].phone+'</div><p class="thepdiachi">Địa chỉ</p><textarea class="customer-diachi" rows="2" readonly="readonly">'+check[i].address+'</textarea><br /><input type="button" value="X" onclick="Deleteuser2(\''+check[i].nameid+'\');" /><input type="button" value="Edit" onclick="ShowEdituser2(\''+check[i].nameid+'\');" /></div>';																										
		if (i%3==2 || i==check.length-1){
			if (i!=check.length-1){
				s+='</div><div class="customer-line">';
			}
			else{															
				s+='</div>';
			}
		}
		if (i%6==5)							
			break;
	}
	var k=Math.ceil(k1/6);
	var s1='<div class="phantrang" id="sotrang">';
	for (var i=0;i<k;i++){
		s1+='<div id="'+(i+1)+'" onclick="Pageshowcheckuser1(\''+(i+1)+'\');doimau(\''+(i+1)+'\');">'+(i+1)+'</div>';
	}
	s1+='</div>';
	s+=s1;				
	document.getElementById('table').innerHTML=s;
	ShowsearchKH();ShowAdduser1();
	localStorage.setItem('check',JSON.stringify(check));
}
function Pageshowcheckuser1(page){
	var check=JSON.parse(localStorage.getItem('check'));
	var b=0;
	var s='<div class="customer-line">';
	for (var i=0;i<check.length;i++){																													
				s+='<div class="customer"><p class="thephovaten">Họ và tên</p><div class="customer-hovaten">'+check[i].name+'</div><p class="thepngaysinh">Ngày sinh</p><div class="customer-ngaysinh">'+check[i].dateofbirth+'</div><br /><span class="thepgioitinh">Giới tính</span><span class="thepphone">Số điện thoại</span><br /><div class="customer-gioitinh">'+check[i].sex+'</div><div class="customer-phone">'+check[i].phone+'</div><p class="thepdiachi">Địa chỉ</p><textarea class="customer-diachi" rows="2" readonly="readonly">'+check[i].address+'</textarea><br /><input type="button" value="X" onclick="Deleteuser2(\''+check[i].nameid+'\');" /><input type="button" value="Edit" onclick="ShowEdituser2(\''+check[i].nameid+'\');" /></div>';						
		if (i%3==2 || i==check.length-1){
			if (i!=check.length-1){
				if (i%6!=5){
					s+='</div><div class="customer-line">';								
				}
				else{
					s+='</div>';								
				}
			}
			else{							
				s+='</div>';							
			}
		}
		if (i%6==5 || i==check.length-1){
			b++;
			if (b==page){																						
				break;							
			}
			s='<div class="customer-line">';
		}
	}
	var k=Math.ceil(check.length/6);
	var s1='<div class="phantrang" id="sotrang">';
	for (var i=0;i<k;i++){
		s1+='<div id="'+(i+1)+'" onclick="Pageshowcheckuser1(\''+(i+1)+'\');doimau(\''+(i+1)+'\');">'+(i+1)+'</div>';
	}
	s1+='</div>';
	s+=s1;				
	document.getElementById('table').innerHTML=s;
	ShowsearchKH();ShowAdduser1();
}
/*---------------------------Nhân Viên-----------------------------*/
function showuser2(){				
	if (localStorage.getItem('user')==null)
		return false;
	var userarr=JSON.parse(localStorage.getItem('user'));				
	var k1=0,k2=0;			
	for (var i=0;i<userarr.length;i++){
		if (userarr[i].power!='0')
			k2++;
	}				
	var s='<div class="customer-line">';
	for (var i=0;i<userarr.length;i++){
		if (userarr[i].power!='0'){						
			k1++;												
			s+='<div class="customer"><p class="thephovaten">Họ và tên</p><div class="customer-hovaten">'+userarr[i].name+'</div><p class="thepngaysinh">Ngày sinh</p><div class="customer-ngaysinh">'+userarr[i].dateofbirth+'</div><br /><span class="thepgioitinh">Giới tính</span><span class="thepphone">Số điện thoại</span><br /><div class="customer-gioitinh">'+userarr[i].sex+'</div><div class="customer-phone">'+userarr[i].phone+'</div><p class="thepdiachi">Địa chỉ</p><textarea class="customer-diachi" rows="2" readonly="readonly">'+userarr[i].address+'</textarea><br /><input type="button" value="X" onclick="Deleteuser2(\''+userarr[i].nameid+'\');" /><input type="button" value="Edit" onclick="ShowEdituser2(\''+userarr[i].nameid+'\');" /></div>';
			if ((k1-1)%3==2 || i==userarr.length-1){
				if (i!=userarr.length-1){
					if ((k1-1)%6!=5)							
						s+='</div><div class="customer-line">';
					else
						s+='</div>';							
				}
				else{
					s+='</div>';															
				}
			}
			if ((k1-1)%6==5)
				break;						
		}					
	}
	var k=Math.ceil(k2/6);				
	var s1='<div class="phantrang" id="sotrang">';
	for (var i=0;i<k;i++){
		s1+='<div id="'+(i+1)+'" onclick="Pageshowuser2(\''+(i+1)+'\');doimau(\''+(i+1)+'\');">'+(i+1)+'</div>';
	}
	s1+='</div>';
	s+=s1;
	document.getElementById('table').innerHTML=s;
	ShowsearchNV();ShowAdduser2();
}
function Pageshowuser2(page){				
	if (localStorage.getItem('user')==null)
		return false;
	var userarr=JSON.parse(localStorage.getItem('user'));			
	var k1=0,k2=0;
	var b=0;
	for (var i=0;i<userarr.length;i++){
		if (userarr[i].power!='0')
			k2++;
	}
	var s='<div class="customer-line">';
	for (var i=0;i<userarr.length;i++){
		if (userarr[i].power!='0'){
			k1++;
			s+='<div class="customer"><p class="thephovaten">Họ và tên</p><div class="customer-hovaten">'+userarr[i].name+'</div><p class="thepngaysinh">Ngày sinh</p><div class="customer-ngaysinh">'+userarr[i].dateofbirth+'</div><br /><span class="thepgioitinh">Giới tính</span><span class="thepphone">Số điện thoại</span><br /><div class="customer-gioitinh">'+userarr[i].sex+'</div><div class="customer-phone">'+userarr[i].phone+'</div><p class="thepdiachi">Địa chỉ</p><textarea class="customer-diachi" rows="2" readonly="readonly">'+userarr[i].address+'</textarea><br /><input type="button" value="X" onclick="Deleteuser2(\''+userarr[i].nameid+'\');" /><input type="button" value="Edit" onclick="ShowEdituser2(\''+userarr[i].nameid+'\');" /></div>';
			if ((k1-1)%3==2 || i==userarr.length-1){
				if (i!=userarr.length-1){
					if ((k1-1)%6!=5){
						s+='</div><div class="customer-line">';								
					}
					else{
						s+='</div>';								
					}
				}
				else{							
					s+='</div>';							
				}
			}
			if ((k1-1)%6==5 || i==userarr.length-1){
				b++;
				if (b==page){																						
					break;							
				}
				s='<div class="customer-line">';
			}						
		}					
	}
	var k=Math.ceil(k2/6);
	var s1='<div class="phantrang" id="sotrang">';
	for (var i=0;i<k;i++){
		s1+='<div id="'+(i+1)+'" onclick="Pageshowuser2(\''+(i+1)+'\');doimau(\''+(i+1)+'\');">'+(i+1)+'</div>';
	}
	s1+='</div>';
	s+=s1;
	document.getElementById('table').innerHTML=s;								
	ShowsearchNV();ShowAdduser2();
}
function Deleteuser2(nameiddl){
	var userarr=JSON.parse(localStorage.getItem('user'));
	for (var i=0;i<userarr.length;i++){
		if (userarr[i].nameid==nameiddl){
			if (confirm('Bạn có muốn xóa tài khoản này?')){
				userarr.splice(i,1);
			}
		}
	}
	localStorage.setItem('user',JSON.stringify(userarr));
	showuser2();
}
function HideEdit2(){
	document.getElementById('Edit1').style.display='none';
}
function ShowEdituser2(user1){
	document.getElementById('Edit1').style.display='block';
	var userarr=JSON.parse(localStorage.getItem('user'));
	var s='';
	for (var i=0;i<userarr.length;i++){
		if(userarr[i].nameid==user1){
			s='<input type="button" value="X" id="tatedit" onclick="HideEdit2();" /><p class="p1" style="margin-left:210px;">Họ và tên</p><input type="text" value="'+userarr[i].name+'" id="edithovaten" class="input1" /><p class="p1" style="margin-left:210px;">Ngày sinh</p><input type="text" value="'+userarr[i].dateofbirth+'" id="editngaysinh" class="input1" /><p class="p1" style="margin-left:205px;">Số điện thoại</p><input type="text" value="'+userarr[i].phone+'" id="editphone" class="input1" /><p class="p1" style="margin-left:220px;">Địa chỉ</p><textarea class="input1" style="height:50px;" id="editdc">'+userarr[i].address+'</textarea>';
			if (userarr[i].sex=='Nam')
				s+='<p class="p1" style="margin-left:210px;">Giới tính</p><input type="radio" id="gtnam1" checked="checked" name="txtgioitinh1" style="margin-left:200px;" /> Nam<input type="radio" id="gtnu1" name="txtgioitinh1" /> Nữ<input type="button" value="OK" class="edit1" onclick="Edituser2(\''+userarr[i].nameid+'\');" />';
			if(userarr[i].sex=='Nữ')
				s+='<p class="p1" style="margin-left:210px;">Giới tính</p><input type="radio" id="gtnam1" name="txtgioitinh1" style="margin-left:200px;" /> Nam<input type="radio" id="gtnu1" checked="checked" name="txtgioitinh1" /> Nữ<input type="button" value="OK" class="edit1" onclick="Edituser2(\''+userarr[i].nameid+'\');" />';
		}
	}
	document.getElementById('Edit1').innerHTML=s;
}
function Edituser2(user1){
	var userarr=JSON.parse(localStorage.getItem('user'));
	var x=document.getElementById('edithovaten').value;
	var x1=document.getElementById('editngaysinh').value;
	var x2=document.getElementById('editphone').value;
	var x3=document.getElementById('editdc').value;				
	for (var i=0;i<userarr.length;i++){
		if (userarr[i].nameid==user1){
			userarr[i].name=x;
			userarr[i].dateofbirth=x1;
			userarr[i].phone=x2;
			userarr[i].address=x3;
			if (document.getElementById('gtnam1').checked==true)
				userarr[i].sex='Nam';
			if (document.getElementById('gtnu1').checked==true)
				userarr[i].sex='Nữ';
		}
	}				
	localStorage.setItem('user',JSON.stringify(userarr));
	document.getElementById('Edit1').style.display='none';
	showuser2();				
}
function tikiemngay(){
	var s='Ngày sinh: <select id="tkiem-datangaysinh"><option>Ngày</option>';
	for (var i=1;i<=31;i++)
		s+='<option>'+i+'</option>'
	s+='</select><select id="tkiem-datathangsinh"><option>Tháng</option>';
	for (var i=1;i<=12;i++)
		s+='<option>'+i+'</option>';
	s+='</select><select id="tkiem-datanamsinh"><option>Năm</option>';
	var date=new Date();
	for (var i=date.getFullYear();i>=1970;i--)
		s+='<option>'+i+'</option>';
	s+='</select>';
	document.getElementById('tkiem-ngaysinh').innerHTML=s;
}
function ShowsearchNV(){
	var s='<div class="tkiem">Search</div><div class="customer-timkiem"><div class="customer-tkiem-hovaten" style="margin-top:40px">Họ và tên: <input type="text" id="tkiem-datahovaten" placeholder="Nhập họ và tên" /></div><div id="tkiem-ngaysinh" class="customer-tkiem-ngaysinh"></div><div class="customer-tkiem-gioitinh">Giới tính</div><div class="customer-tkiem-phone" style="margin-left:145px;">Số điện thoại</div><br /><div class="customer-tkiem-datagioitinh"><select id="tkiem-datagioitinh"><option>Chọn</option><option>Nam</option><option>Nữ</option></select></div><div class="customer-tkiem-dataphone"><input type="text" id="tkiem-dataphone" placeholder="Nhập số điện thoại" /></div></div><input type="button" value="Tìm kiếm" class="nuttimtk" onclick="ChecktkiemNV();"  />';
	document.getElementById('Timkiem').style.display='block';
	document.getElementById('Timkiem').innerHTML=s;
	tikiemngay();
}
function ShowAdduser2(){
	var s='<div id="them">Add</div><div class="divform"><form method="get" onsubmit="return Checkdata();"><div class="formleft"><div><p style="font-size:18px;">Tên đăng nhập</p><input type="text" id="tendn" placeholder="Tên đăng nhập" style="width:200px; height:20px;" /><span id="datatendn"></span><p style="font-size:18px;">Password</p><input type="password" id="matkhau" placeholder="Password" style="width:200px; height:20px;" /><span id="datamatkhau"></span><p style="font-size:18px;">Họ và tên</p><input type="text" id="hovaten" placeholder="Họ và tên" style="width:200px; height:20px;" /><span id="datahovaten"></span><p style="font-size:15px;">Giới tính</p><input type="radio" id="gtnam" name="txtgioitinh" /> Nam<input type="radio" id="gtnu" name="txtgioitinh" /> Nữ<span id="datagioitinh"></span></div></div><div class="formright"><div id="divformright"><p style="font-size:18px;">Ngày sinh</p><input type="text" id="ngaysinh" placeholder="VD: 01/02/2001" style="width:200px; height:20px;" /><span id="datangaysinh"></span><p style="font-size:18px;">Số điện thoại</p><input type="text" id="phone" placeholder="Number" style="width:200px; height:20px;" /><span id="dataphone"></span><p style="font-size:18px;">Địa chỉ</p><textarea id="txtdc" placeholder="Nhập địa chỉ" ></textarea><span id="datatxtdc"></span><div class="mqtt"><br /><div style="font-size:15px;">Mã Quyền <br /><select class="selectmqtt" id="maquyen" style="margin-top:6px;"><option>Admin</option><option>NV</option><option>QL</option><option>KH</option></select></div><div style="margin-left:30px;font-size:15px;">Tình trạng<br /><select class="selectmqtt" id="tinhtrang" style="margin-top:6px;"><option>ON</option><option>OFF</option></select></div></div></div></div><input type="submit" value="Thêm" class="nutthem" onclick="Adduser2();" /></form></div>';
	document.getElementById('Them').style.display='block';
	document.getElementById('Them').innerHTML=s;
}
function Adduser2(){
	if (Checkdata()==false)
		return false;				
	var x=document.getElementById('tendn').value;				
	var x1=document.getElementById('matkhau').value;
	var x2=document.getElementById('hovaten').value;
	var x3;
	if (document.getElementById('gtnam').checked==true)
		x3='Nam';
	if (document.getElementById('gtnu').checked==true)
		x3='Nữ';
	var x4=document.getElementById('ngaysinh').value;
	var x5=document.getElementById('phone').value;
	var x6=document.getElementById('txtdc').value;
	var x7;
	if (document.getElementById('maquyen').value=='Admin')
		x7='1';
	if (document.getElementById('maquyen').value=='QL')
		x7='2';
	if (document.getElementById('maquyen').value=='NV')
		x7='3';
	if (document.getElementById('maquyen').value=='KH')
		x7='0';
	var x8;
	if (document.getElementById('tinhtrang').value=='ON')
		x8=true;
	if (document.getElementById('tinhtrang').value=='OFF')
		x8=false;								
	var userarr=JSON.parse(localStorage.getItem('user'));
	var user={nameid:x,password:x1,name:x2,sex:x3,dateofbirth:x4,phone:x5,address:x6,power:x7,status:x8};
	userarr.push(user);
	localStorage.setItem('user',JSON.stringify(userarr));
	showuser2();
}
function ChecktkiemNV(){
	var check=[];
	if (localStorage.getItem('check')!=null){					
		localStorage.removeItem('check');
	}
	var x1=document.getElementById('tkiem-datahovaten').value;
	var x2=document.getElementById('tkiem-datangaysinh').value;
	var x3=document.getElementById('tkiem-datathangsinh').value;
	var x4=document.getElementById('tkiem-datanamsinh').value;
	var x5=document.getElementById('tkiem-datagioitinh').value;
	var x6=document.getElementById('tkiem-dataphone').value;
	if (x2=='1'||x2=='2'||x2=='3'||x2=='4'||x2=='5'||x2=='6'||x2=='7'||x2=='8'||x2=='9')
		x2='0'+x2;
	if (x3=='1'||x3=='2'||x3=='3'||x3=='4'||x3=='5'||x3=='6'||x3=='7'||x3=='8'||x3=='9')
		x3='0'+x3;
	if (x3=='02'){
		var a=parseInt(x4);
		if (a%4==0 && a%100!=0 || a%400==0 || x4=='Năm')
			if (x2=='30' || x2=='31')
				alert('Tìm kiếm không phù hợp');
		else
			if (x2=='29' || x2=='30' || x2=='31')
				alert('Tìm kiếm không phù hợp');
	}
	if (x1=='')
		x1=null;
	if (x2=='Ngày')
		x2=null;
	if (x3=='Tháng')
		x3=null;
	if (x4=='Năm')
		x4=null;
	if (x5=='Chọn')
		x5=null;
	if (x6=='')
		x6=null;
	if (x1==null&&x2==null&&x3==null&&x4==null&&x5==null&&x6==null){
		alert('Chưa nhập dữ liệu cần tìm');
		return false;
	}
	var userarr=JSON.parse(localStorage.getItem('user'));
	var k1=0;
	for (var i=0;i<userarr.length;i++){
		if (userarr[i].power!='0'){
			var kt=userarr[i].dateofbirth.split("/");						
			if (x1==userarr[i].name&&x2==null&&x3==null&&x4==null&&x5==null&&x6==null){													
				k1++;
				check.push(userarr[i]);													
			}
			if (x1==null&&x2==kt[0]&&x3==null&&x4==null&&x5==null&&x6==null){													
				k1++;
				check.push(userarr[i]);													
			}
			if (x1==null&&x2==null&&x3==kt[1]&&x4==null&&x5==null&&x6==null){													
				k1++;
				check.push(userarr[i]);													
			}
			if (x1==null&&x2==null&&x3==null&&x4==kt[2]&&x5==null&&x6==null){													
				k1++;					
				check.push(userarr[i]);								
			}
			if (x1==null&&x2==null&&x3==null&&x4==null&&userarr[i].sex==x5&&x6==null){																				
				k1++;					
				check.push(userarr[i]);								
			}						
			if (x1==null&&x2==null&&x3==null&&x4==null&&x5==null&&x6==userarr[i].phone){													
				k1++;					
				check.push(userarr[i]);								
			}
			if (x1==userarr[i].name&&x2==null&&x3==null&&x4==null&&x5==null&&x6==userarr[i].phone){																			
				k1++;					
				check.push(userarr[i]);								
			}
			if (x1==null&&x2==kt[0]&&x3==kt[1]&&x4==null&&x5==null&&x6==null){													
				k1++;					
				check.push(userarr[i]);								
			}
			if (x1==null&&x2==kt[0]&&x3==kt[1]&&x4==kt[2]&&x5==null&&x6==null){													
				k1++;					
				check.push(userarr[i]);								
			}
			if (x1==null&&x2==kt[0]&&x3==null&&x4==kt[2]&&x5==null&&x6==null){													
				k1++;					
				check.push(userarr[i]);								
			}
			if (x1==null&&x2==null&&x3==kt[1]&&x4==kt[2]&&x5==null&&x6==null){													
				k1++;					
				check.push(userarr[i]);								
			}									
		}
	}
	if (k1==0){
		alert('Không tìm thấy dữ liệu cần tìm');
		return false;
	}
	var s='<div class="customer-line">';
	for (var i=0;i<check.length;i++){																													
				s+='<div class="customer"><p class="thephovaten">Họ và tên</p><div class="customer-hovaten">'+check[i].name+'</div><p class="thepngaysinh">Ngày sinh</p><div class="customer-ngaysinh">'+check[i].dateofbirth+'</div><br /><span class="thepgioitinh">Giới tính</span><span class="thepphone">Số điện thoại</span><br /><div class="customer-gioitinh">'+check[i].sex+'</div><div class="customer-phone">'+check[i].phone+'</div><p class="thepdiachi">Địa chỉ</p><textarea class="customer-diachi" rows="2" readonly="readonly">'+check[i].address+'</textarea><br /><input type="button" value="X" onclick="Deleteuser2(\''+check[i].nameid+'\');" /><input type="button" value="Edit" onclick="ShowEdituser2(\''+check[i].nameid+'\');" /></div>';																										
		if (i%3==2 || i==check.length-1){
			if (i!=check.length-1){
				s+='</div><div class="customer-line">';
			}
			else{															
				s+='</div>';
			}
		}
		if (i%6==5)							
			break;
	}
	var k=Math.ceil(k1/6);
	var s1='<div class="phantrang" id="sotrang">';
	for (var i=0;i<k;i++){
		s1+='<div id="'+(i+1)+'" onclick="Pageshowcheckuser2(\''+(i+1)+'\');doimau(\''+(i+1)+'\');">'+(i+1)+'</div>';
	}
	s1+='</div>';
	s+=s1;				
	document.getElementById('table').innerHTML=s;
	ShowsearchNV();ShowAdduser2();
	localStorage.setItem('check',JSON.stringify(check));
}
function Pageshowcheckuser2(page){
	var check=JSON.parse(localStorage.getItem('check'));
	var b=0;
	var s='<div class="customer-line">';
	for (var i=0;i<check.length;i++){																													
				s+='<div class="customer"><p class="thephovaten">Họ và tên</p><div class="customer-hovaten">'+check[i].name+'</div><p class="thepngaysinh">Ngày sinh</p><div class="customer-ngaysinh">'+check[i].dateofbirth+'</div><br /><span class="thepgioitinh">Giới tính</span><span class="thepphone">Số điện thoại</span><br /><div class="customer-gioitinh">'+check[i].sex+'</div><div class="customer-phone">'+check[i].phone+'</div><p class="thepdiachi">Địa chỉ</p><textarea class="customer-diachi" rows="2" readonly="readonly">'+check[i].address+'</textarea><br /><input type="button" value="X" onclick="Deleteuser2(\''+check[i].nameid+'\');" /><input type="button" value="Edit" onclick="ShowEdituser2(\''+check[i].nameid+'\');" /></div>';						
		if (i%3==2 || i==check.length-1){
			if (i!=check.length-1){
				if (i%6!=5){
					s+='</div><div class="customer-line">';								
				}
				else{
					s+='</div>';								
				}
			}
			else{							
				s+='</div>';							
			}
		}
		if (i%6==5 || i==check.length-1){
			b++;
			if (b==page){																						
				break;							
			}
			s='<div class="customer-line">';
		}
	}
	var k=Math.ceil(check.length/6);
	var s1='<div class="phantrang" id="sotrang">';
	for (var i=0;i<k;i++){
		s1+='<div id="'+(i+1)+'" onclick="Pageshowcheckuser2(\''+(i+1)+'\');doimau(\''+(i+1)+'\');">'+(i+1)+'</div>';
	}
	s1+='</div>';
	s+=s1;				
	document.getElementById('table').innerHTML=s;
	ShowsearchNV();ShowAdduser2();
}
function text(){
	var x=document.getElementById('file').value;				
	var x1=x.split('\\');
	document.getElementById('filehinh').innerHTML='<img src="..\\trangchu\\hinhanhsp\\'+x1[2]+'" />';
}
function Deleteimg(productid){
	var productarr=JSON.parse(localStorage.getItem('product'));
	for (var i=0;i<productarr.length;i++)
		if (productarr[i].productid==productid)
			productarr[i].img='sach.png';
	localStorage.setItem('product',JSON.stringify(productarr));
	document.getElementById('filehinh').innerHTML='<img src="..\\trangchu\\hinhanhsp\\sach.png />';				
}
function showproduct(){
	var productarr=JSON.parse(localStorage.getItem('product'));
	var s='<div class="product">';				
	for (var i=0;i<productarr.length;i++){
		s+='<div class="product-line"><div class="product-img"><img src="../trangchu/hinhanhsp/'+productarr[i].img+'" /></div><div class="product-price">'+productarr[i].productprice+'đ</div><div class="product-id">Mã sản phẩm<br /><input type="text" value="'+productarr[i].productid+'" readonly="readonly" /></div><div class="product-name">Tên sản phẩm</div><div class="product-dataname"><textarea rows="2" readonly="readonly">'+productarr[i].productname+'</textarea></div><div class="product-author">Tác giả: '+productarr[i].productauthor+'</div><div class="product-category">Thể loại: '+productarr[i].productcategory+'</div><div class="product-datadescribe"><textarea rows="2" cols="25" readonly="readonly">'+productarr[i].productdescribe+'</textarea></div><div class="product-describe" style="margin-top:15px;">Mô tả sản phẩm:</div> <div class="product-button"><input type="button" value="X" onclick="Deleteproduct(\''+productarr[i].productid+'\');" /><input type="button" value="Edit" onclick="Showeditproduct(\''+productarr[i].productid+'\');" /></div></div>';
		if (i%3==2 || i==productarr.length-1){
			if (i!=productarr.length-1){
				if (i%6!=5)							
					s+='</div><div class="product">';
				else
					s+='</div>';							
			}
			else{
				s+='</div>';															
			}
		}
		if (i%6==5)
			break;
	}
	var k=Math.ceil(productarr.length/6);
	var s1='<div class="phantrang" id="sotrang">';
	for (var i=0;i<k;i++){
		s1+='<div id="'+(i+1)+'" onclick="Pageshowproduct(\''+(i+1)+'\');doimau(\''+(i+1)+'\');">'+(i+1)+'</div>';
	}
	s1+='</div>';
	s+=s1;				
	document.getElementById('table').innerHTML=s;
	showaddproduct();showsearchproduct();
}
function doimau(page){
	document.getElementById(page).style.backgroundColor='#F00';
}
function Pageshowproduct(page){				
	if (localStorage.getItem('product')==null)
		return false;												
	var productarr=JSON.parse(localStorage.getItem('product'));							
	var b=0;				
	var s='<div class="product">';
	for (var i=0;i<productarr.length;i++){											
			s+='<div class="product-line"><div class="product-img"><img src="../trangchu/hinhanhsp/'+productarr[i].img+'" /></div><div class="product-price">'+productarr[i].productprice+'đ</div><div class="product-id">Mã sản phẩm<br /><input type="text" value="'+productarr[i].productid+'" readonly="readonly" /></div><div class="product-name">Tên sản phẩm</div><div class="product-dataname"><textarea rows="2" readonly="readonly">'+productarr[i].productname+'</textarea></div><div class="product-author">Tác giả: '+productarr[i].productauthor+'</div><div class="product-category">Thể loại: '+productarr[i].productcategory+'</div><div class="product-datadescribe"><textarea rows="2" cols="25" readonly="readonly">'+productarr[i].productdescribe+'</textarea></div><div class="product-describe" style="margin-top:15px;">Mô tả sản phẩm:</div> <div class="product-button"><input type="button" value="X" onclick="Deleteproduct(\''+productarr[i].productid+'\');" /><input type="button" value="Edit" onclick="Showeditproduct(\''+productarr[i].productid+'\');" /></div></div>';
			if (i%3==2 || i==productarr.length-1){
				if (i!=productarr.length-1){
					if (i%6!=5){
						s+='</div><div class="product">';								
					}
					else{
						s+='</div>';								
					}
				}
				else{							
					s+='</div>';							
				}
			}
			if (i%6==5 || i==userarr.length-1){
				b++;
				if (b==page){																						
					break;							
				}
				s='<div class="product">';
			}																
	}
	var k=Math.ceil(productarr.length/6);
	var s1='<div class="phantrang" id="sotrang">';
	for (var i=0;i<k;i++){
		s1+='<div id="'+(i+1)+'" onclick="Pageshowproduct(\''+(i+1)+'\');doimau(\''+(i+1)+'\');">'+(i+1)+'</div>';
	}
	s1+='</div>';
	s+=s1;
	document.getElementById('table').innerHTML=s;
	showaddproduct();showsearchproduct();												
}
function Deleteproduct(nameiddl){
	var productarr=JSON.parse(localStorage.getItem('product'));
	for (var i=0;i<productarr.length;i++){
		if (productarr[i].productid==nameiddl){
			if (confirm('Bạn có muốn xóa sản phẩm này?')){
				productarr.splice(i,1);
			}
		}
	}
	localStorage.setItem('product',JSON.stringify(productarr));
	showproduct();
}
function Selectcategory(idcategory,id){
	var categoryarr=JSON.parse(localStorage.getItem('category'));
	var s='Thể loại: <select id="edit2-dataproductcategory"><option>Thể loại</option>';
	for (var i=0;i<categoryarr.length;i++){
		if(categoryarr[i].categoryname==id)
			s+='<option selected="selected">'+categoryarr[i].categoryname+'</option>';
		else
			s+='<option>'+categoryarr[i].categoryname+'</option>';
	}
	s+='</select>';
	document.getElementById(idcategory).innerHTML=s;
}
function hideeditproduct(){
	document.getElementById('Edit2').style.display='none';
}
function Showeditproduct(product1){
	document.getElementById('Edit2').style.display='block';
	var productarr=JSON.parse(localStorage.getItem('product'));
	var s='';
	var x;
	for (var i=0;i<productarr.length;i++){
		if (productarr[i].productid==product1){
			x=productarr[i].productcategory;						
			s='<form><div class="edit2-x"><input type="button" value="X" onclick="hideeditproduct();" /></div><div class="edit2-id">Mã sản phẩm</div><div class="edit2-dataid"><input type="text" id="edit2-dataproductid" value="'+productarr[i].productid+'" /></div><div class="edit2-name">Tên sản phẩm</div><div class="edit2-dataname"><textarea rows="2" cols="25" id="edit2-dataproductname">'+productarr[i].productname+'</textarea></div><div class="edit2-author">Tác giả</div><div class="edit2-dataauthor"><input type="text" id="edit2-dataproductauthor" value="'+productarr[i].productauthor+'" /></div><div class="edit2-category" id="edit2-category1"></div><div class="edit2-price">Giá tiền</div><div class="edit2-dataprice"><input type="number" id="edit2-dataproductprice" value="'+productarr[i].productprice+'" /></div><div class="edit2-describe">Mô tả sản phẩm</div><div class="edit2-datadescribe"><textarea rows="2" cols="25" id="edit2-dataproductdescribe">'+productarr[i].productdescribe+'</textarea></div><div id="filehinh"><img src="../trangchu/hinhanhsp/'+productarr[i].img+'" /></div><div class="edit2-file"><input type="file" id="file" onchange="text();" /></div><div class="edit2-file"><input type="button" value="Delete image" onclick="Deleteimg(\''+productarr[i].productid+'\');" style="width:100px; border-radius:10px; outline:none;" /></div></form><div class="edit2-ok"><input type="button" value="OK" onclick="Editproduct(\''+productarr[i].productid+'\');" /></div>';
		}
	}
	document.getElementById('Edit2').innerHTML=s;
	Selectcategory('edit2-category1',x);				
}
function Editproduct(product1){
	var productarr=JSON.parse(localStorage.getItem('product'));
	var categoryarr=JSON.parse(localStorage.getItem('category'));
	var x1=document.getElementById('edit2-dataproductid').value;
	var x2=document.getElementById('edit2-dataproductname').value;
	var x3=document.getElementById('edit2-dataproductauthor').value;
	var x4=document.getElementById('edit2-dataproductcategory').value;
	var x5=document.getElementById('edit2-dataproductprice').value;
	var x6=document.getElementById('edit2-dataproductdescribe').value;
	var x7=document.getElementById('file').value;
	var x8;
					
	if (x7=='')
		x7=null;
	else{
		x8=x7.split("\\")
	}
	for (var i=0;i<productarr.length;i++){
		if (productarr[i].productid==product1){
			productarr[i].productid=x1;
			productarr[i].productname=x2;
			productarr[i].productauthor=x3;
			productarr[i].productcategory=x4;
			productarr[i].productprice=x5;
			productarr[i].productdescribe=x6;
			if (x7!=null)
				productarr[i].img=x8[2];						
		}
	}
	localStorage.setItem('product',JSON.stringify(productarr));
	document.getElementById('Edit2').style.display='none';
	showproduct();
}
function showaddproduct(){
	document.getElementById('Them').style.display='block';
	var s='<div id="them">Add</div><form class="product-form" onsubmit="return Checkaddproduct();"><div class="product-left"><div class="product-add-id">Mã sản phẩm</div><div class="product-add-dataid"><input type="text" id="product-add-dataid" placeholder="Nhập mã sản phẩm" /></div><span id="check-productid"></span><div class="product-add-name">Tên sản phẩm</div><div class="product-add-dataname"><textarea rows="2" cols="25" id="product-add-dataname"></textarea></div><span id="check-productname"></span><div class="product-add-author">Tác giả</div><div class="product-add-dataauthor"><input type="text" id="product-add-dataauthor" placeholder="Nhập tác giả" /></div><span id="check-productauthor"></span><div class="product-add-category" id="product-add-category1"></div><span id="check-productcategory"></span></div><div class="product-right"><div class="product-add-price">Giá tiền</div><div class="product-add-dataprice"><input type="number" id="product-add-dataprice" placeholder="Nhập giá tiền" /></div><span id="check-productprice"></span><div class="product-add-describe">Mô tả</div><div class="product-add-datadescribe"><textarea rows="2" cols="25" id="product-add-datadescribe"></textarea></div><span id="check-productdescribe"></span><div class="product-add-img" id="produc-add-dataimg"></div><div class="product-add-file"><input type="file" id="product-add-datafile" onchange="themhinh();" /></div><span id="check-productfile"></span></div><input type="submit" id="product-add" value="Thêm" onclick="Addproduct();" /></form>';
	document.getElementById('Them').innerHTML=s;
	Selectcategory('product-add-category1');
}
function showsearchproduct(){
	document.getElementById('Timkiem').style.display='block';
	var s='<div class="tkiem">Search</div><div class="product-search"><div class="product-search-id">Mã sản phẩm</div><div class="product-search-name">Tên sản phẩm</div><div class="product-search-dataid"><input type="text" id="product-search-dataid" placeholder="Mã cần tìm" /></div><div class="product-search-dataname"><input type="text" id="product-search-dataname" placeholder="Tên cần tìm" /></div><br /><div class="product-search-category" id="product-search-category1"></div><div class="product-search-price">Giá tiền: <select id="product-search-dataprice"><option>Giá tiền</option><option>0-100,000</option><option>100,000-300,000</option><option>300,000-400,000</option></select></div></div><div class="product-search-button"><input type="button" value="Tìm kiếm" onclick="Searchproduct();" /></div>';
	document.getElementById('Timkiem').innerHTML=s;
	Selectcategory('product-search-category1');
}
function Checkaddproduct(){
	var productarr=JSON.parse(localStorage.getItem('product'));
	var x1=document.getElementById('product-add-dataid');
	var x2=document.getElementById('product-add-dataname');
	var x3=document.getElementById('product-add-dataauthor');
	var x4=document.getElementById('edit2-dataproductcategory');
	var x5=document.getElementById('product-add-dataprice');
	var x6=document.getElementById('product-add-datadescribe');
	var x7=document.getElementById('product-add-datafile');
	if (x1.value==''){
		x1.focus();
		document.getElementById('check-productid').innerHTML="*Chưa nhập mã";
		return false;
	}
	for (var i=0;i<productarr.length;i++){
		if(productarr[i].productid==x1){
			x1.focus();
			document.getElementById('check-productid').innerHTML="*Mã đã tồn tại";
			return false;
		}
	}
	if (x2.value==''){
		x2.focus();
		document.getElementById('check-productname').innerHTML="*Chưa nhập tên";
		return false;
	}
	if (x3.value==''){
		x3.focus();
		document.getElementById('check-productaythor').innerHTML="*Chưa nhập tác giả";
		return false;
	}
	if (x4.value=='Thể loại'){
		x4.focus();
		document.getElementById('check-productcategory').innerHTML="*Chưa chọn thể loại";
		return false;
	}
	if (x5.value==''){
		x5.focus();
		document.getElementById('check-productprice').innerHTML="*Chưa nhập giá tiền";
		return false;
	}
	if (x6.value==''){
		x6.focus();
		document.getElementById('check-productdescribe').innerHTML="*Chưa nhập mô tả";
		return false;
	}
	if (x7.value==''){							
		document.getElementById('check-productfile').innerHTML="*Chưa chọn hình";
		return false;
	}
}
function Addproduct(){
	if (Checkaddproduct()==false)
		return false;
	var productarr=JSON.parse(localStorage.getItem('product'));
	var x1=document.getElementById('product-add-dataid').value;
	var x2=document.getElementById('product-add-dataname').value;
	var x3=document.getElementById('product-add-dataauthor').value;
	var x4=document.getElementById('edit2-dataproductcategory').value;
	var x5=document.getElementById('product-add-dataprice').value;
	var x6=document.getElementById('product-add-datadescribe').value;
	var x7=document.getElementById('product-add-datafile').value;
	var x8=x7.split("\\");
	var product1={img:x8[2],productid:x1,productname:x2,productauthor:x3,productcategory:x4,productprice:x5,productdescribe:x6};
	productarr.push(product1);
	localStorage.setItem('product',JSON.stringify(productarr));
	showproduct(); 						
}
function themhinh(){
	var x7=document.getElementById('product-add-datafile').value;
	if (x7!=''){
		var x8=x7.split("\\");
		document.getElementById('produc-add-dataimg').innerHTML='<img src="../trangchu/hinhanhsp/'+x8[2]+'" />';
	}
	else
		document.getElementById('produc-add-dataimg').style.display='none';
}
function Searchproduct(){
	var check=[];
	if (localStorage.getItem('check')!=null)
		localStorage.removeItem('check');						
	var productarr=JSON.parse(localStorage.getItem('product'));						
	var x1=document.getElementById('product-search-dataid').value;
	var x2=document.getElementById('product-search-dataname').value;
	var x3=document.getElementById('edit2-dataproductcategory').value;
	var x4=document.getElementById('product-search-dataprice').value;
	var x5;
	var k,k1,k3,k4;						
	if (x1=='')
		x1=null;
	if (x2=='')
		x2=null;
	if (x3=='Thể loại')
		x3=null;
	if (x4=='Giá tiền')
		x4=null;
	else{							
		x5=x4.split("-");
		k=x5[0];
		k1=x5[1];
		if (k[0]=='0' && k1[0]=='1'){
			k3=0;
			k4=100000;
		}
		if (k[0]=='1' && k1[0]=='3'){
			k3=100000;
			k4=300000;
		}
		if (k[0]=='3' && k1[0]=='4'){
			k3=300000;
			k4=400000;
		}
	}
	if (x1==null&&x2==null&&x3==null&&x4==null){
		alert('Chưa nhập dữ liệu cần tìm');
		return false;
	}
	var b=0,a=0;				
	var s='<div class="product">';
	for (var i=0;i<productarr.length;i++){
		if (x1==productarr[i].productid&&x2==null&&x3==null&&x4==null)
			check.push(productarr[i]);
		if (x1==null&&x2==productarr[i].productname&&x3==null&&x4==null)
			check.push(productarr[i]);
		if (x1==null&&x2==null&&x3==productarr[i].productcategory&&x4==null)
			check.push(productarr[i]);
		if (x1==null&&x2==null&&x3==null&&productarr[i].productprice>=k3&&productarr[i].productprice<=k4)
			check.push(productarr[i]);
		if (x1==productarr[i].productid&&x2==productarr[i].productname&&x3==null&&x4==null)
			check.push(productarr[i]);
		if (x1==productarr[i].productid&&x2==null&&x3==productarr[i].productcategory&&x4==null)
			check.push(productarr[i]);
		if (x1==productarr[i].productid&&x2==null&&x3==null&&productarr[i].productprice>=k3&&productarr[i].productprice<=k4)
			check.push(productarr[i]);
		if (x1==productarr[i].productid&&x2==productarr[i].productname&&x3==productarr[i].productcategory&&x4==null)
			check.push(productarr[i]);
		if (x1==productarr[i].productid&&x2==productarr[i].productname&&x3==null&&productarr[i].productprice>=k3&&productarr[i].productprice<=k4)
			check.push(productarr[i]);
		if (x1==productarr[i].productid&&x2==null&&x3==productarr[i].productcategory&&productarr[i].productprice>=k3&&productarr[i].productprice<=k4)
			check.push(productarr[i]);
		if (x1==null&&x2==productarr[i].productname&&x3==productarr[i].productcategory&&productarr[i].productprice>=k3&&productarr[i].productprice<=k4)
			check.push(productarr[i]);
		if (x1==productarr[i].productid&&x2==productarr[i].productname&&x3==productarr[i].productcategory&&productarr[i].productprice>=k3&&productarr[i].productprice<=k4)
			check.push(productarr[i]);														
	}
	if (check.length==0){
		alert('Không tìm thấy dữ liệu cần tìm');
		return false;
	}
	for (var i=0;i<check.length;i++){
		s+='<div class="product-line"><div class="product-img"><img src="../trangchu/hinhanhsp/'+check[i].img+'" /></div><div class="product-price">'+check[i].productprice+'đ</div><div class="product-id">Mã sản phẩm<br /><input type="text" value="'+check[i].productid+'" readonly="readonly" /></div><div class="product-name">Tên sản phẩm</div><div class="product-dataname"><textarea rows="2" readonly="readonly">'+check[i].productname+'</textarea></div><div class="product-author">Tác giả: '+check[i].productauthor+'</div><div class="product-category">Thể loại: '+check[i].productcategory+'</div><div class="product-datadescribe"><textarea rows="2" cols="25" readonly="readonly">'+check[i].productdescribe+'</textarea></div><div class="product-describe" style="margin-top:15px;">Mô tả sản phẩm:</div> <div class="product-button"><input type="button" value="X" onclick="Deleteproduct(\''+check[i].productid+'\');" /><input type="button" value="Edit" onclick="Showeditproduct(\''+check[i].productid+'\');" /></div></div>';
		if (i%3==2 || i==check.length-1){
			if (i!=check.length-1){
				if (i%6!=5)							
					s+='</div><div class="product">';
				else
					s+='</div>';							
			}
			else{
				s+='</div>';															
			}
		}
		if (i%6==5)
			break;
	}
	var p=Math.ceil(check.length/6);
	var s1='<div class="phantrang" id="sotrang">';
	for (var i=0;i<p;i++){
		s1+='<div id="'+(i+1)+'" onclick="Pageshowproductsearch(\''+(i+1)+'\');doimau(\''+(i+1)+'\');">'+(i+1)+'</div>';
	}
	s1+='</div>';
	s+=s1;				
	document.getElementById('table').innerHTML=s;
	showaddproduct();showsearchproduct();
	localStorage.setItem('check',JSON.stringify(check));						
}
function Pageshowproductsearch(page){
	var check=JSON.parse(localStorage.getItem('check'));										
	var s='<div class="product">';						
	var b=0;
	for (var i=0;i<check.length;i++){
		s+='<div class="product-line"><div class="product-img"><img src="../trangchu/hinhanhsp/'+check[i].img+'" /></div><div class="product-price">'+check[i].productprice+'đ</div><div class="product-id">Mã sản phẩm<br /><input type="text" value="'+check[i].productid+'" readonly="readonly" /></div><div class="product-name">Tên sản phẩm</div><div class="product-dataname"><textarea rows="2" readonly="readonly">'+check[i].productname+'</textarea></div><div class="product-author">Tác giả: '+check[i].productauthor+'</div><div class="product-category">Thể loại: '+check[i].productcategory+'</div><div class="product-datadescribe"><textarea rows="2" cols="25" readonly="readonly">'+check[i].productdescribe+'</textarea></div><div class="product-describe" style="margin-top:15px;">Mô tả sản phẩm:</div> <div class="product-button"><input type="button" value="X" onclick="Deleteproduct(\''+check[i].productid+'\');" /><input type="button" value="Edit" onclick="Showeditproduct(\''+check[i].productid+'\');" /></div></div>';
		if (i%3==2 || i==check.length-1){
			if (i!=check.length-1){
				if (i%6!=5){
					s+='</div><div class="product">';								
				}
				else{
					s+='</div>';								
				}
			}
			else{							
				s+='</div>';							
			}
		}
		if (i%6==5 || i==check.length-1){
			b++;
			if (b==page){																															
				break;							
			}
			s='<div class="product">';
		}	
	}
	var p=Math.ceil(check.length/6);
	var s1='<div class="phantrang" id="sotrang">';
	for (var i=0;i<p;i++){
		s1+='<div id="'+(i+1)+'" onclick="Pageshowproductsearch(\''+(i+1)+'\');doimau(\''+(i+1)+'\');">'+(i+1)+'</div>';
	}
	s1+='</div>';
	s+=s1;				
	document.getElementById('table').innerHTML=s;
	showaddproduct();showsearchproduct();
}
/*------------------------------Hóa Đơn--------------------------*/
var billarr=[];
function Bill(){
	if (localStorage.getItem('bill')==null){
		billarr=[						
{billid:'1',customerid:'khachhang6',productname:'Donald Trump: Màn Trình Diễn Vĩ Đại$3&&Tuổi Trẻ Đáng Giá Bao Nhiêu?$2&&Đắc Nhân Tâm$6',date:'7/6/2020',price:200000,status:true},
{billid:'2',customerid:'khachhang4',productname:'Donald Trump: Màn Trình Diễn Vĩ Đại$3',date:'23/1/2018',price:520000,status:true},
{billid:'3',customerid:'khachhang11',productname:'Tuổi Trẻ Đáng Giá Bao Nhiêu?$2',date:'1/2/2019',price:80000,status:true},
{billid:'4',customerid:'khachhang15',productname:'Đắc Nhân Tâm$6',date:'2/9/2018',price:245000,status:false},
{billid:'5',customerid:'khachhang3',productname:'Đắc Nhân Tâm$4',date:'5/7/2019',price:245000,status:false},
{billid:'6',customerid:'khachhang8',productname:'Đắc Nhân Tâm$5',date:'22/6/2020',price:245000,status:true}							
];
		localStorage.setItem('bill',JSON.stringify(billarr));
	}
}
function Xuly(){
	if (document.getElementById('edit3stt').checked==true)
		document.getElementById('edit3-status1').innerHTML='Đã xử lý';
	else
		document.getElementById('edit3-status1').innerHTML='Chưa xử lý';
}
function getnameuser(name){				
	var userarr=JSON.parse(localStorage.getItem('user'));
	var x;
	for (var i=0;i<userarr.length;i++)
		if (userarr[i].nameid==name){
			x=userarr[i].name;
			break;
		}
	return x;
}
function showbill(){
	if (localStorage.getItem('bill')==null)
		return false;
	var billarr=JSON.parse(localStorage.getItem('bill'));
	var x;
	var k=Math.ceil(billarr.length/12);
	var s1='<div class="phantrang" id="sotrang">';
	for (var i=0;i<k;i++){
		s1+='<div id="'+(i+1)+'" onclick="Pageshowbill(\''+(i+1)+'\');doimau(\''+(i+1)+'\');">'+(i+1)+'</div>';
	}
	s1+='</div>';								
	var s='<div class="billtable"><div class="billtable-id">Mã khách hàng</div><div class="billtable-name">Tên khách hàng</div><div class="billtable-date">Ngày thanh toán</div><div class="billtable-price">Giá</div><div class="billtable-status">Tình trạng</div></div>';
	for (var i=0;i<billarr.length;i++){
		x=getnameuser(billarr[i].customerid);
		s+='<div class="billcustomer" onclick="showeditbill(\''+billarr[i].billid+'\');"><div class="billcustomer-id">'+billarr[i].customerid+'</div><div class="billcustomer-name">'+x+'</div><div class="billcustomer-date">'+billarr[i].date+'</div><div class="billcustomer-price">'+billarr[i].price+' vnđ</div>';
		if (billarr[i].status==true)
			s+='<div class="billcustomer-status">Đã xử lí</div></div>';
		if (billarr[i].status==false)
			s+='<div class="billcustomer-status">Chưa xử lí</div></div>';
		if (i%12==11)
			break;					
	}
	s+=s1;							
	document.getElementById('table').innerHTML=s;
	showsearchbill();showthongke()								
}
function Pageshowbill(page){				
	if (localStorage.getItem('bill')==null)
		return false;
	var billarr=JSON.parse(localStorage.getItem('bill'));
	var k=Math.ceil(billarr.length/12);
	var s1='<div class="phantrang" id="sotrang">';
	for (var i=0;i<k;i++){
		s1+='<div id="'+(i+1)+'" onclick="Pageshowbill(\''+(i+1)+'\');doimau(\''+(i+1)+'\');">'+(i+1)+'</div>';
	}
	s1+='</div>';
	var b=0;				
	var s='<div class="billtable"><div class="billtable-id">Mã khách hàng</div><div class="billtable-name">Tên khách hàng</div><div class="billtable-date">Ngày thanh toán</div><div class="billtable-price">Giá</div><div class="billtable-status">Tình trạng</div></div>';
	for (var i=0;i<billarr.length;i++){
		x=getnameuser(billarr[i].customerid);
		s+='<div class="billcustomer" onclick="showeditbill(\''+billarr[i].billid+'\');"><div class="billcustomer-id">'+billarr[i].customerid+'</div><div class="billcustomer-name">'+x+'</div><div class="billcustomer-date">'+billarr[i].date+'</div><div class="billcustomer-price">'+billarr[i].price+' vnđ</div>';
		if (billarr[i].status==true)
			s+='<div class="billcustomer-status">Đã xử lí</div></div>';
		if (billarr[i].status==false)
			s+='<div class="billcustomer-status">Chưa xử lí</div></div>';				
		if (i%12==11 || i==billarr.length-1){
			b++;
			if (b==page){							
				s+=s1;
				document.getElementById('table').innerHTML=s;
				break;
			}
			s='<div class="billtable"><div class="billtable-id">Mã khách hàng</div><div class="billtable-name">Tên khách hàng</div><div class="billtable-date">Ngày thanh toán</div><div class="billtable-price">Giá</div><div class="billtable-status">Tình trạng</div></div>';
		}
	}
	showsearchbill();showthongke()								
}
function Hideedit3(){
	document.getElementById('Edit3').style.display='none';
}
function showeditbill(billid){
	document.getElementById('Edit3').style.display='block';
	var billarr=JSON.parse(localStorage.getItem('bill'));
	var s='';
	var x;
	for (var i=0;i<billarr.length;i++)
		if (billarr[i].billid==billid){
			x=getnameuser(billarr[i].customerid);
			s='<div class="edit3-x"><input type="button" value="X" onclick="Hideedit3();" /></div><div class="edit3-nameproduct">Tên sản phẩm</div><div class="edit3-datanameproduct"><textarea rows="3" cols="35">'+billarr[i].productname+'</textarea></div><div class="edit3-name">Tên khách hàng:</div><div class="edit3-dataname">'+x+'</div><br /><div class="edit3-date">Ngày thanh toán:</div><div class="edit3-datadate">'+billarr[i].date+'</div><br /><div class="edit3-price">Tổng giá tiền:</div><div class="edit3-dataprice">'+billarr[i].price+' vnđ</div><br /><div class="edit3-status">Tình trạng:</div>';
			if (billarr[i].status==true)
				s+='<div class="edit3-datastatus" id="edit3-status1">Đã xử lý</div><label class="switch" style="margin-left:50px;"><input type="checkbox" onchange="Xuly();" id="edit3stt" checked="checked" class="stt" /><span class="on"></span></label><br /><div class="edit3-button1"><input type="button" value="In hóa đơn" /></div><div class="edit3-button2"><input type="button" value="OK" onclick="editbill(\''+billarr[i].billid+'\');showbill();" /></div>';
			if (billarr[i].status==false)
				s+='<div class="edit3-datastatus" id="edit3-status1">Chưa xử lý</div><label class="switch" style="margin-left:50px;"><input type="checkbox" onchange="Xuly();" id="edit3stt" class="stt" /><span class="on"></span></label><br /><div class="edit3-button1"><input type="button" value="In hóa đơn" /></div><div class="edit3-button2"><input type="button" value="OK" onclick="editbill(\''+billarr[i].billid+'\');showbill();" /></div>';
			break;
		}
	document.getElementById('Edit3').innerHTML=s;
}
function editbill(billid){
	var x=document.getElementById('edit3stt').checked;
	var billarr=JSON.parse(localStorage.getItem('bill'));
	for (var i=0;i<billarr.length;i++){
		if (billarr[i].billid==billid){
			if (x==true)
				billarr[i].status=true;
			if (x==false)
				billarr[i].status=false;
			break;
		}
	}
	localStorage.setItem('bill',JSON.stringify(billarr));
	document.getElementById('Edit3').style.display='none';					
}
function showsearchbill(){
	document.getElementById('Timkiem').style.display='block';
	var s='<div class="tkiem">Search</div><div class="searchbill">Xem đơn hàng trong khoảng thời gian</div><div class="searchbill-from">Từ: </div><div class="searchbill-from-data" style="margin-left:110px;" id="searchbill-from-data1"></div><br /><div class="searchbill-to">Đến: </div><div class="searchbill-to-data" id="searchbill-to-data1"></div><div class="searchbill-button"><input type="button" value="Tìm kiếm" onclick="Checkbill();" /></div>';
	document.getElementById('Timkiem').innerHTML=s;				
	myfrombill();
	mytobill();				
}
function datefrombill(){
	var year=document.getElementById('search-from-year').value;
	var month=document.getElementById('search-from-month').value
	var songay=0;
	switch (month){
		case '1':
		case '3':
		case '5':
		case '7':
		case '8':
		case '10':
		case '12':
			songay=31;
			break;
		case '4':
		case '6':
		case '9':
		case '11':
			songay=30;
			break;
		case '2':
			if (year%4==0 && year%100!=0 || year%400==0)
				songay=29;
			else
				songay=28;
			break;
	}
	var s='<option>Ngày</option>';
	if (songay>0){
		for (i=1;i<=songay;i++)
			s+='<option>'+i+'</option>';
	}										
	document.getElementById('search-from-day').innerHTML=s;
}
function myfrombill(){
	var s='<select id="search-from-day"><option>Ngày</option></select>';
	var month1='<select id="search-from-month" onchange="datefrombill();"><option>Tháng</option>';
	for (var i=1;i<=12;i++)
		month1+='<option>'+i+'</option>';
	month1+='</select>';								
	var date=new Date();
	var s1='<select id="search-from-year" onchange="datefrombill();"><option>Năm</option>';
	for (var i=date.getFullYear();i>=1970;i--)
		s1+='<option>'+i+'</option>';
	s1+='</select>';
	month1+=s1;
	s+=month1
	document.getElementById('searchbill-from-data1').innerHTML=s;
}
function datetobill(){
	var year=document.getElementById('search-to-year').value;
	var month=document.getElementById('search-to-month').value
	var songay=0;
	switch (month){
		case '1':
		case '3':
		case '5':
		case '7':
		case '8':
		case '10':
		case '12':
			songay=31;
			break;
		case '4':
		case '6':
		case '9':
		case '11':
			songay=30;
			break;
		case '2':
			if (year%4==0 && year%100!=0 || year%400==0)
				songay=29;
			else
				songay=28;
			break;
	}
	var s='<option>Ngày</option>';
	if (songay>0){
		for (i=1;i<=songay;i++)
			s+='<option>'+i+'</option>';
	}											
	document.getElementById('search-to-day').innerHTML=s;
}
function mytobill(){							
	var s='<select id="search-to-day"><option>Ngày</option></select>';
	var month1='<select id="search-to-month" onchange="datetobill();"><option>Tháng</option>';
	for (var i=1;i<=12;i++)
		month1+='<option>'+i+'</option>';
	month1+='</select>';								
	var date=new Date();
	var s1='<select id="search-to-year" onchange="datetobill();"><option>Năm</option>';
	for (var i=date.getFullYear();i>=1970;i--)
		s1+='<option>'+i+'</option>';
	s1+='</select>';
	month1+=s1;
	s+=month1
	document.getElementById('searchbill-to-data1').innerHTML=s;
}
function Checkbill(){
	if (localStorage.getItem('check')!=null)
		localStorage.removeItem('check');
	var check=[];
	var billarr=JSON.parse(localStorage.getItem('bill'));
	var x1=document.getElementById('search-from-day').value;
	var x2=document.getElementById('search-from-month').value;
	var x3=document.getElementById('search-from-year').value;
	var y1=document.getElementById('search-to-day').value;
	var y2=document.getElementById('search-to-month').value;
	var y3=document.getElementById('search-to-year').value;
	var k,k1,k2,k3;
	for (var i=0;i<billarr.length;i++){
		k=billarr[i].date.split("/");
		k1=parseInt(k[0]);
		k2=parseInt(k[1]);
		k3=parseInt(k[2]);
		if (x3<=k3 && k3<=y3){
			if (x3<k3 && k3<y3)
				check.push(billarr[i]);
			if (x3==k3 && k3<y3){
				if (x2<k2)
					check.push(billarr[i]);
				if (x2==k2)
					if (x1<=k1)
						check.push(billarr[i]);
			}
			if (x3<k3 && k3==y3){
				if (k2<y2)
					check.push(billarr[i]);
				if (k2==y2);
					if (k1<=y1)
						check.push(billarr[i]);
			}
			if (x3==k3 && k3==y3){
				if (x2<k2 && k2<y2)
					check.push(billarr[i]);
				if (x2==k2 && k2<y2)
					if (x1<=k1)
						check.push(billarr[i]);							
				if (x2<k2 && k2==y2)
					if (k1<=y1)
						check.push(billarr[i]);
				if (x2==k2 && k2==y2)
					if (x1<=k1 && k1<=y1)
						check.push(billarr[i]);
			}
		}					
	}
	if (check.length==0){
		alert('Không tìm thấy');
		return false;
	}
	var x;
	var k=Math.ceil(check.length/12);
	var s1='<div class="phantrang" id="sotrang">';
	for (var i=0;i<k;i++){
		s1+='<div id="'+(i+1)+'" onclick="Pagecheckshowbill(\''+(i+1)+'\');doimau(\''+(i+1)+'\');">'+(i+1)+'</div>';
	}
	s1+='</div>';								
	var s='<div class="billtable"><div class="billtable-id">Mã khách hàng</div><div class="billtable-name">Tên khách hàng</div><div class="billtable-date">Ngày thanh toán</div><div class="billtable-price">Giá</div><div class="billtable-status">Tình trạng</div></div>';
	for (var i=0;i<check.length;i++){
		x=getnameuser(check[i].customerid);
		s+='<div class="billcustomer" onclick="showeditbill(\''+check[i].customerid+'\');"><div class="billcustomer-id">'+check[i].customerid+'</div><div class="billcustomer-name">'+x+'</div><div class="billcustomer-date">'+check[i].date+'</div><div class="billcustomer-price">'+check[i].price+' vnđ</div>';
		if (check[i].status==true)
			s+='<div class="billcustomer-status">Đã xử lí</div></div>';
		if (check[i].status==false)
			s+='<div class="billcustomer-status">Chưa xử lí</div></div>';
		if (i%12==11)
			break;					
	}
	s+=s1;							
	document.getElementById('table').innerHTML=s;
	localStorage.setItem('check',JSON.stringify(check))
	showsearchbill();showthongke()
}
function Pagecheckshowbill(page){								
	var check=JSON.parse(localStorage.getItem('check'));
	var k=Math.ceil(check.length/12);
	var s1='<div class="phantrang" id="sotrang">';
	for (var i=0;i<k;i++){
		s1+='<div id="'+(i+1)+'" onclick="Pagecheckshowbill(\''+(i+1)+'\');doimau(\''+(i+1)+'\');">'+(i+1)+'</div>';
	}
	s1+='</div>';
	var b=0;				
	var s='<div class="billtable"><div class="billtable-id">Mã khách hàng</div><div class="billtable-name">Tên khách hàng</div><div class="billtable-date">Ngày thanh toán</div><div class="billtable-price">Giá</div><div class="billtable-status">Tình trạng</div></div>';
	for (var i=0;i<check.length;i++){
		x=getnameuser(check[i].customerid);
		s+='<div class="billcustomer" onclick="showeditbill(\''+check[i].customerid+'\');"><div class="billcustomer-id">'+check[i].customerid+'</div><div class="billcustomer-name">'+x+'</div><div class="billcustomer-date">'+check[i].date+'</div><div class="billcustomer-price">'+check[i].price+' vnđ</div>';
		if (check[i].status==true)
			s+='<div class="billcustomer-status">Đã xử lí</div></div>';
		if (check[i].status==false)
			s+='<div class="billcustomer-status">Chưa xử lí</div></div>';				
		if (i%12==11 || i==check.length-1){
			b++;
			if (b==page){							
				s+=s1;
				document.getElementById('table').innerHTML=s;
				break;
			}
			s='<div class="billtable"><div class="billtable-id">Mã khách hàng</div><div class="billtable-name">Tên khách hàng</div><div class="billtable-date">Ngày thanh toán</div><div class="billtable-price">Giá</div><div class="billtable-status">Tình trạng</div></div>';
		}
	}
	showsearchbill();showthongke()								
}
/*-------------------------------Thống kê-------------------------------*/
function datefromthongke(){
	var year=document.getElementById('thongke-from-year').value;
	var month=document.getElementById('thongke-from-month').value
	var songay=0;
	switch (month){
		case '1':
		case '3':
		case '5':
		case '7':
		case '8':
		case '10':
		case '12':
			songay=31;
			break;
		case '4':
		case '6':
		case '9':
		case '11':
			songay=30;
			break;
		case '2':
			if (year%4==0 && year%100!=0 || year%400==0)
				songay=29;
			else
				songay=28;
			break;
	}
	var s='<option>Ngày</option>';
	if (songay>0){
		for (i=1;i<=songay;i++)
			s+='<option>'+i+'</option>';
	}										
	document.getElementById('thongke-from-day').innerHTML=s;
}
function myfromthongke(){
	var s='<select id="thongke-from-day"><option>Ngày</option></select>';
	var month1='<select id="thongke-from-month" onchange="datefromthongke();"><option>Tháng</option>';
	for (var i=1;i<=12;i++)
		month1+='<option>'+i+'</option>';
	month1+='</select>';								
	var date=new Date();
	var s1='<select id="thongke-from-year" onchange="datefromthongke();"><option>Năm</option>';
	for (var i=date.getFullYear();i>=1970;i--)
		s1+='<option>'+i+'</option>';
	s1+='</select>';
	month1+=s1;
	s+=month1
	document.getElementById('thongke-from-data1').innerHTML=s;
}
function datetothongke(){
	var year=document.getElementById('thongke-to-year').value;
	var month=document.getElementById('thongke-to-month').value
	var songay=0;
	switch (month){
		case '1':
		case '3':
		case '5':
		case '7':
		case '8':
		case '10':
		case '12':
			songay=31;
			break;
		case '4':
		case '6':
		case '9':
		case '11':
			songay=30;
			break;
		case '2':
			if (year%4==0 && year%100!=0 || year%400==0)
				songay=29;
			else
				songay=28;
			break;
	}
	var s='<option>Ngày</option>';
	if (songay>0){
		for (i=1;i<=songay;i++)
			s+='<option>'+i+'</option>';
	}											
	document.getElementById('thongke-to-day').innerHTML=s;
}
function mytothongke(){							
	var s='<select id="thongke-to-day"><option>Ngày</option></select>';
	var month1='<select id="thongke-to-month" onchange="datetothongke();"><option>Tháng</option>';
	for (var i=1;i<=12;i++)
		month1+='<option>'+i+'</option>';
	month1+='</select>';								
	var date=new Date();
	var s1='<select id="thongke-to-year" onchange="datetothongke();"><option>Năm</option>';
	for (var i=date.getFullYear();i>=1970;i--)
		s1+='<option>'+i+'</option>';
	s1+='</select>';
	month1+=s1;
	s+=month1
	document.getElementById('thongke-to-data1').innerHTML=s;
}
function showthongke(){
	document.getElementById('Them').style.display='block';
	var s='<div id="thongke">Thống kê</div><div class="thongke-vb">Chọn khoảng thời gian cần thống kê</div><div class="thongke-from">Từ:</div><div class="thongke-from-data" id="thongke-from-data1" style="margin-left:10px;"></div><br /><div class="thongke-to">Đến: </div><div class="thongke-to-data" id="thongke-to-data1"></div><div class="thongke-button"><input type="button" value="Thống kê" onclick="Thongkebill();" /></div>';
	document.getElementById('Them').innerHTML=s;
	myfromthongke();
	mytothongke();
}
function Thongkebill(){
	if (localStorage.getItem('check')!=null){
		localStorage.removeItem('check');
		localStorage.removeItem('tong');
	}
	var check=[];
	var billarr=JSON.parse(localStorage.getItem('bill'));
	var x1=document.getElementById('thongke-from-day').value;
	var x2=document.getElementById('thongke-from-month').value;
	var x3=document.getElementById('thongke-from-year').value;
	var y1=document.getElementById('thongke-to-day').value;
	var y2=document.getElementById('thongke-to-month').value;
	var y3=document.getElementById('thongke-to-year').value;
	var k,k1,k2,k3;
	if (x1=='Ngày'&&y1=='Ngày'&&x2=='Tháng'&&y2=='Tháng'&&x3=='Năm'&&y3=='Năm'){
		alert('Chưa chọn ngày');
		return false;
	}
	for (var i=0;i<billarr.length;i++){
		if (billarr[i].status==true){
			k=billarr[i].date.split("/");
			k1=parseInt(k[0]);
			k2=parseInt(k[1]);
			k3=parseInt(k[2]);
			if (x3<=k3 && k3<=y3){
				if (x1=='Ngày'&&y1=='Ngày'&&x2=='Tháng'&&y2=='Tháng')
					check.push(billarr[i]);						
				if (x3<k3 && k3<y3)
					check.push(billarr[i]);
				if (x3==k3 && k3<y3){
					if (x2<k2)
						check.push(billarr[i]);
					if (x2==k2)
						if (x1<=k1)
							check.push(billarr[i]);
				}
				if (x3<k3 && k3==y3){
					if (k2<y2)
						check.push(billarr[i]);
					if (k2==y2);
						if (k1<=y1)
							check.push(billarr[i]);
				}
				if (x3==k3 && k3==y3){
					if (x2<k2 && k2<y2)
						check.push(billarr[i]);
					if (x2==k2 && k2<y2)
						if (x1<=k1)
							check.push(billarr[i]);							
					if (x2<k2 && k2==y2)
						if (k1<=y1)
							check.push(billarr[i]);
					if (x2==k2 && k2==y2)
						if (x1<=k1 && k1<=y1)
							check.push(billarr[i]);
				}
			}					
		}
	}
	if (check.length==0){
		alert('Không tìm thấy');
		return false;
	}
	var tong=0;
	for (var i=0;i<check.length;i++)
		tong+=check[i].price;
	var x;
	var k=Math.ceil(check.length/12);
	var s1='<div class="phantrang" id="sotrang">';
	for (var i=0;i<k;i++){
		s1+='<div id="'+(i+1)+'" onclick="Pagethongkeshowbill(\''+(i+1)+'\');doimau(\''+(i+1)+'\');">'+(i+1)+'</div>';
	}
	s1+='</div>';								
	var s='<div class="billtable"><div class="billtable-id">Mã khách hàng</div><div class="billtable-name">Tên khách hàng</div><div class="billtable-date">Ngày thanh toán</div><div class="billtable-price">Giá</div><div class="billtable-status">Tình trạng</div></div>';
	for (var i=0;i<check.length;i++){
		x=getnameuser(check[i].customerid);
		s+='<div class="billcustomer" onclick="showeditbill(\''+check[i].customerid+'\');"><div class="billcustomer-id">'+check[i].customerid+'</div><div class="billcustomer-name">'+x+'</div><div class="billcustomer-date">'+check[i].date+'</div><div class="billcustomer-price">'+check[i].price+' vnđ</div>';
		if (check[i].status==true)
			s+='<div class="billcustomer-status">Đã xử lí</div></div>';
		if (check[i].status==false)
			s+='<div class="billcustomer-status">Chưa xử lí</div></div>';
		if (i%12==11)
			break;					
	}
	s+=s1;
	var s2='<div class="thongke-tong">Tổng chi phí: '+tong+' vnđ</div>';
	s+=s2;							
	document.getElementById('table').innerHTML=s;
	localStorage.setItem('check',JSON.stringify(check));
	localStorage.setItem('tong',JSON.stringify(tong));
	showsearchbill();showthongke();
}
function Pagethongkeshowbill(page){								
	var check=JSON.parse(localStorage.getItem('check'));
	var tong=JSON.parse(localStorage.getItem('tong'));
	var s2='<div class="thongke-tong">Tổng chi phí: '+tong+' vnđ</div>';
	var k=Math.ceil(check.length/12);
	var s1='<div class="phantrang" id="sotrang">';
	for (var i=0;i<k;i++){
		s1+='<div id="'+(i+1)+'" onclick="Pagethongkeshowbill(\''+(i+1)+'\');doimau(\''+(i+1)+'\');">'+(i+1)+'</div>';
	}
	s1+='</div>';
	var b=0;				
	var s='<div class="billtable"><div class="billtable-id">Mã khách hàng</div><div class="billtable-name">Tên khách hàng</div><div class="billtable-date">Ngày thanh toán</div><div class="billtable-price">Giá</div><div class="billtable-status">Tình trạng</div></div>';
	for (var i=0;i<check.length;i++){
		x=getnameuser(check[i].customerid);
		s+='<div class="billcustomer" onclick="showeditbill(\''+check[i].customerid+'\');"><div class="billcustomer-id">'+check[i].customerid+'</div><div class="billcustomer-name">'+x+'</div><div class="billcustomer-date">'+check[i].date+'</div><div class="billcustomer-price">'+check[i].price+' vnđ</div>';
		if (check[i].status==true)
			s+='<div class="billcustomer-status">Đã xử lí</div></div>';
		if (check[i].status==false)
			s+='<div class="billcustomer-status">Chưa xử lí</div></div>';				
		if (i%12==11 || i==check.length-1){
			b++;
			if (b==page){							
				s+=s1;
				s+=s2;
				document.getElementById('table').innerHTML=s;
				break;
			}
			s='<div class="billtable"><div class="billtable-id">Mã khách hàng</div><div class="billtable-name">Tên khách hàng</div><div class="billtable-date">Ngày thanh toán</div><div class="billtable-price">Giá</div><div class="billtable-status">Tình trạng</div></div>';
		}
	}
	showsearchbill();showthongke()								
}
function Dangxuat(){
	if (localStorage.getItem('dn')!=null){
		localStorage.removeItem('dn');
		document.getElementById('dang-ky').innerHTML='<div onclick="divdangki();"><b>Đăng Ký</b></div>';
		document.getElementById('icon-dn').innerHTML='<div class="user21"><img src="hinhanh/user.svg" /></div>';
		document.getElementById('dang-nhap').innerHTML='<div style="margin-left:140px;" onclick="divdangnhap();"><b>Đăng nhập</b></div>';					
	}
}