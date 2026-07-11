// ==========================================
// 1. DANH SÁCH DỮ LIỆU SẢN PHẨM (ARRAY DATA)
// ==========================================
var mangSanPham =[
    { 
        maSp: "1", 
        tenSp: "Áo thi đấu sân nhà CLB Manchester United 2026/2027", 
        giaSp: "2.200.000", 
        tenAnh: "aodau2627.jpg", 
        moTa: "Áo thi đấu CLB Manchester United 2026/2027 chính hãng, chất liệu cao cấp.", 
        Thuonghieu: "Adidas",
        dacDiem: "<li>Thiết kế ôm dáng</li><li>Cổ áo polo dệt kim phẳng kẻ sọc</li><li>Huy hiệu Manchester United dệt nổi</li><li>Màu sản phẩm: Mufc Red</li><li>Viền tay áo dệt kim phẳng</li><li>Các yếu tố nhận diện thương hiệu adidas</li><li>Phù hợp cho cả Nam và Nữ</li>", 
        mota:"<li>Áo đấu bóng đá với công nghệ Climacool mang lại cảm giác thoải mái, mát mẻ, khô ráo.</li><li>Cùng tôn vinh di sản bóng đá với Áo Đấu Sân Nhà Manchester United 26/27. Lấy cảm hứng từ kỷ nguyên huyền thoại những năm 1970 của câu lạc bộ, chiếc áo đấu này đồng thời sở hữu cổ áo và cổ tay kẻ sọc dệt kim phẳng, kỷ niệm 50 năm chiến thắng huyền thoại tại mùa giải FA Cup.</li><li>Thiết kế sọc táo bạo tổng hoà màu đỏ, trắng và đen, thể hiện tinh thần của Manchester United dành cho cả người hâm mộ trung thành và những người dẫn đầu xu hướng. Kiểu dáng ôm sát tôn dáng được nâng tầm với chất vải nhanh khô giúp bạn cảm thấy thoải mái suốt trận đấu.</li><li>Mát mẻ. Khô thoáng. Sẵn sàng. Công nghệ Climacool thấm hút và phân tán mồ hôi giúp bạn luôn mát mẻ, khô thoáng và không chút phân tâm. Khả năng thoát mồ hôi và thấm hút nhanh hơn giúp làm mát.</li><li>Logo adidas, huy hiệu câu lạc bộ dệt và biểu tượng 3 Gạch tạo nên diện mạo hoàn thiện, biến chiếc áo đấu này thành một mảnh ghép thời trang kinh điển dành cho người hâm mộ. Hãy cùng tôn vinh truyền thống và sự chuyên dụng trong trang phục được thiết kế dành cho nhà vô địch.</li>",
    },
    { 
        maSp: "2", tenSp: "Áo Đấu Sân Nhà Manchester United 26/27 Phiên Bản Authentic", 
        giaSp: "3.000.000", 
        tenAnh: "aodau.jpg", 
        moTa: "Áo thi đấu CLB Manchester United 2026/2027 chính hãng, chất liệu cao cấp.",
        dacDiem: "<li>Thiết kế ôm dáng</li><li>Cổ áo polo dệt kim phẳng kẻ sọc</li><li>Huy hiệu Manchester United </li><li>Màu sản phẩm: Mufc Red</li><li>Viền tay áo dệt kim phẳng</li><li>Các yếu tố nhận diện thương hiệu adidas</li><li>Phù hợp cho cả Nam và Nữ</li>",
        mota: "<li>Áo đấu ôm sát với công nghệ Climacool+ giúp làm mát hiệu quả khi thi đấu trên sân.</li><li>Hãy kế thừa di sản của Manchester United cùng mẫu Áo Đấu Sân Nhà Manchester United 26/27 Phiên Bản Authentic, lời tri ân dành cho phong cách thập niên 1970 đầy biểu tượng và chiến tích FA Cup lừng lẫy.</li><li>Chiếc áo đấu sở hữu cổ áo và bo tay dệt kim phẳng kẻ sọc, kết hợp ba gam màu đỏ, trắng và đen trong thiết kế táo bạo nhằm tôn vinh 50 năm danh hiệu và những đường sọc biểu tượng. Phần nền trơn giúp các chi tiết vải dệt kim nổi bật rõ nét, biến chiếc áo thành điểm nhấn ấn tượng cho cả người hâm mộ lẫn cầu thủ.</li><li>Khả năng làm mát tối ưu. Với công nghệ vải Climacool+ từ adidas, kỹ thuật thế hệ mới và vật liệu tiên tiến được kết hợp để mang lại hiệu suất mát mẻ, khô thoáng và không bị xao nhãng khi vận động.</li><li>Công nghệ định hình cơ thể mang đến phom dáng vừa vặn, ôm chắc cơ thể, hỗ trợ chuyển động linh hoạt và tăng sự tự tin. Nhờ chất liệu in chuyển nhiệt, chiếc áo giúp bạn luôn cảm thấy tươi mát, dù đang chinh phục vinh quang hay sống lại những khoảnh khắc lịch sử của câu lạc bộ.</li><li>Chiếc áo sân nhà chính hãng của Manchester United được tạo nên dành cho những ai luôn đòi hỏi sự xuất sắc trong từng chi tiết. Cùng adidas, đó không chỉ là trang phục thể thao — mà còn là một phong cách sống.</li>",
    },
    { 
        maSp: "3", 
        tenSp: "Áo Đấu Sân Khách Manchester United 25/26", 
        giaSp: "2.200.000", 
        tenAnh: "aodau2526.avif", 
        moTa: "Áo thi đấu CLB Manchester United 2025/2026 chính hãng, chất liệu cao cấp.", 
        Thuonghieu: "Adidas", 
        dacDiem: "<li>Thiết kế ôm dáng</li><li>Cổ tròn</li><li>Huy hiệu Manchester United dệt nổi</li><li>Màu sản phẩm: White</li><li>Phù hợp cho cả Nam và Nữ</li>" ,
        mota:"<li>Chiếc áo sân khách mang đậm dấu ấn adidas x Man Utd, được làm mới cho thế hệ người hâm mộ ngày nay.</li><li>Phong cách Manchester United sắc lạnh có một diện mạo tươi mới. Người hâm mộ không mất nhiều thời gian để nhận ra dấu ấn từ bộ trang phục hoa tuyết adidas những năm đầu thập niên 90 trên chiếc áo đấu này. Điều mới mẻ ở đây chính là những điểm nhấn màu tím và tím nhạt, cùng lớp hoàn thiện kim loại giúp huy hiệu Quỷ Đỏ thêm phần nổi bật. Được tích hợp công nghệ AEROREADY thấm hút mồ hôi hiệu quả, chiếc áo này giúp người hâm mộ luôn thoải mái và tập trung theo dõi từng đường bóng.</li><li>Thiết kế ôm sát cơ thể, cổ áo tròn và tay áo dệt kim phẳng mang đến sự thoải mái tối đa. Hãy cùng adidas và Manchester United tôn vinh di sản bóng đá với chiếc áo đấu sân khách 25/26 này.</li>", 
    },
    { 
        maSp: "4", 
        tenSp: "Áo Đấu Sân Khách Manchester United 25/26 Phiên Bản Authentic", 
        giaSp: "3.000.000", 
        tenAnh: "aodau2526vip.avif", 
        moTa: "Áo thi đấu CLB Manchester United 2025/2026 chính hãng, chất liệu cao cấp.",
        Thuonghieu: "Adidas", 
        dacDiem: "<li>Thiết kế ôm dáng</li><li>Cổ tròn</li><li>Huy hiệu Manchester United in nhiệt</li><li>Màu sản phẩm: White</li><li>Phù hợp cho cả Nam và Nữ</li>", 
        mota:"<li>Chiếc áo sân khách mang đậm dấu ấn adidas x Man Utd, được làm mới cho thế hệ người hâm mộ ngày nay.</li><li>Phong cách Manchester United sắc lạnh có một diện mạo tươi mới. Người hâm mộ không mất nhiều thời gian để nhận ra dấu ấn từ bộ trang phục hoa tuyết adidas những năm đầu thập niên 90 trên chiếc áo đấu này. Điều mới mẻ ở đây chính là những điểm nhấn màu tím và tím nhạt, cùng lớp hoàn thiện kim loại giúp huy hiệu Quỷ Đỏ thêm phần nổi bật. Được tích hợp công nghệ AEROREADY thấm hút mồ hôi hiệu quả, chiếc áo này giúp người hâm mộ luôn thoải mái và tập trung theo dõi từng đường bóng.</li><li>Thiết kế ôm sát cơ thể, cổ áo tròn và tay áo dệt kim phẳng mang đến sự thoải mái tối đa. Hãy cùng adidas và Manchester United tôn vinh di sản bóng đá với chiếc áo đấu sân khách 25/26 này.</li>", 

    },
    { 
        maSp: "5", 
        tenSp: "Áo Đấu Thứ Ba Manchester United 25/26",
        giaSp: "2.200.000", 
        tenAnh: "aodauthu3.avif", 
        moTa: "Áo thi đấu CLB Manchester United 2025/2026 chính hãng, chất liệu cao cấp.",
        Thuonghieu: "Adidas", 
        dacDiem: "<li>Thiết kế ôm dáng</li><li>Cổ tròn</li><li>Huy hiệu Manchester United dệt nổi</li><li>Màu sản phẩm: Black</li><li>Phù hợp cho cả Nam và Nữ</li>",
        mota:"<li>Thể hiện niềm đam mê với Man Utd qua áo đấu bóng đá thoải mái này.</li><li>Nằm trong bộ đồ adidas cổ điển, tối giản, đưa người hâm mộ trở về với thời kỳ huy hoàng. Khoác lên mình tông màu đen chủ đạo, mẫu áo đấu thứ ba của Manchester United này gợi nhớ đến những huyền thoại của câu lạc bộ và những màn trình diễn để đời trên sân khách. Biểu tượng Ba Lá màu vàng và huy hiệu câu lạc bộ nổi bật trên ngực áo, kết hợp với những hoạ tiết tinh xảo lấy cảm hứng từ hình ảnh Quỷ đỏ được ẩn mình trong lớp vải. Công nghệ AEROREADY kiểm soát độ ẩm giúp người hâm mộ luôn thoải mái trong khi đội bóng của họ tạo nên những kỷ niệm mới.</li>"
    },
    {
        maSp: "6", 
        tenSp: "Áo Đấu Thứ Ba Manchester United 25/26 Phiên Bản Authentic", 
        giaSp: "3.000.000", 
        tenAnh: "aodauthu3vip.avif", 
        moTa: "Áo thi đấu CLB Manchester United 2025/2026 chính hãng, chất liệu cao cấp.",
        Thuonghieu: "Adidas", 
        dacDiem: "<li>Thiết kế ôm dáng</li><li>Cổ tròn</li><li>Huy hiệu Manchester United in nhiệt</li><li>Màu sản phẩm: Black</li><li>Phù hợp cho cả Nam và Nữ</li>",
        mota:"<li>Thể hiện niềm đam mê với Man Utd qua chiếc áo đấu thứ ba tập trung vào hiệu suất này.</li><li>Là một phần của bộ trang phục adidas cổ điển, tối giản, đưa người hâm mộ trở về với thời kỳ huy hoàng. Khoác lên mình tông màu đen chủ đạo, mẫu áo đấu thứ ba chính hãng của Manchester United này gợi nhớ đến những huyền thoại của câu lạc bộ và những màn trình diễn để đời trên sân khách. Biểu tượng Ba Lá màu vàng và huy hiệu câu lạc bộ nổi bật trên ngực áo, kết hợp với những hoạ tiết tinh xảo lấy cảm hứng từ hình ảnh Quỷ đỏ được ẩn mình trong lớp vải. Mẫu áo đấu siêu nhẹ, tối ưu cho hiệu suất thi đấu, nổi bật với thiết kế bắt mắt - sẵn sàng đồng hành cùng bạn tạo nên những kỷ niệm bóng đá mới.</li>"
    },
    {
        maSp: "7", 
        tenSp: "Áo Đấu Sân Nhà Manchester United 25/26", 
        giaSp: "2.200.000", 
        tenAnh: "aodausannha.avif", 
        moTa: "Áo thi đấu CLB Manchester United 2025/2026 chính hãng, chất liệu cao cấp.",
        Thuonghieu: "Adidas", 
        dacDiem: "<li>Thiết kế ôm dáng</li><li>Cổ chữ V</li><li>Huy hiệu Manchester United dệt nổi</li><li>Màu sản phẩm: Mufc Red</li><li>Phù hợp cho cả Nam và Nữ</li>",
        mota: "<li>Được thiết kế để mang lại cảm giác thoải mái, mẫu áo sân nhà kinh điển của Man Utd này mang đậm phong cách Old Trafford.</li><li>Hiếm có sân đấu nào mang đến nhiều cảm xúc kịch tính như thánh địa sân nhà của Manchester United trong suốt những năm qua. Ra mắt cho mùa giải 25/26, mẫu áo adidas này là lời tôn vinh Old Trafford - “Theatre of Dreams” - với điểm nhấn dòng chữ biểu tượng và họa tiết cách điệu trên tay áo lấy cảm hứng từ sân vận động lịch sử này. Được thiết kế dành cho người hâm mộ bóng đá một cách thoải mái nhất, áo có tay dài, công nghệ AEROREADY giúp kiểm soát độ ẩm và huy hiệu câu lạc bộ được dệt tinh xảo."
    },
    {
        maSp: "8",
        tenSp: "Áo Đấu Sân Nhà Manchester United 25/26 Phiên Bản Authentic",
        giaSp: "3.000.000",
        tenAnh: "aodausannhavip.avif",
        moTa: "Áo thi đấu CLB Manchester United 2025/2026 chính hãng, chất liệu cao cấp.",
        Thuonghieu: "Adidas",  
        dacDiem: "<li>Thiết kế ôm dáng</li><li>Cổ chữ V</li><li>Huy hiệu Manchester United in nhiệt</li><li>Màu sản phẩm: Mufc Red</li><li>Phù hợp cho cả Nam và Nữ</li>",
        mota: "<li>Được thiết kế để thi đấu, mẫu áo sân nhà kinh điển của Man Utd này mang đậm phong cách Old Trafford.</li><li>Hiếm có sân đấu nào mang đến nhiều cảm xúc kịch tính như thánh địa sân nhà của Manchester United trong suốt những năm qua. Ra mắt cho mùa giải 25/26, mẫu áo đấu adidas chính hãng này là lời tôn vinh Old Trafford – “Theatre of Dreams” – với điểm nhấn dòng chữ biểu tượng và họa tiết cách điệu trên tay áo lấy cảm hứng từ sân vận động lịch sử này. Hướng tới lối chơi bóng đá đầy cảm hứng, thiết kế này còn chú trọng hiệu năng thi đấu với cấu trúc tối ưu và logo CLB được in nhiệt."
    },
    {
        maSp: "9",
        tenSp: "Áo Đấu Sân Nhà Nhật Bản 26",
        giaSp: "2.200.000",
        tenAnh: "japan.jpg",
        moTa:"Áo Đấu Sân Nhà Đội Tuyển Nhật Bản năm 2026 chính hãng, chất liệu cao cấp.",
        Thuonghieu: "Adidas",  
        dacDiem:"<li>Thiết kế ôm dáng</li><li>Cổ chữ V</li><li>Huy hiệu Đội Tuyển Nhật Bản dệt nổi</li><li>Màu sản phẩm: Japan Blue / Ash Blue</li><li>Phù hợp cho cả Nam và Nữ</li>",
        mota: "<li>Áo đấu Climacool ứng dụng công nghệ giúp cơ thể mát mẻ và khô ráo suốt trận đấu.</li><li>Áo Đấu Sân Nhà Đội Tuyển Nhật Bản 26 không chỉ đơn thuần là một món trang phục, mà còn là biểu tượng của khát vọng và ý chí bền bỉ. Lấy cảm hứng từ chủ đề “Vươn tới chân trời mới”, chiếc áo đấu thể hiện tinh thần khám phá không ngừng và quyết tâm của đội tuyển trong hành trình vượt qua mọi giới hạn, hướng tới những thành tựu mới.</li><li>Áo đấu được trang bị công nghệ Climacool. Thoáng mát. Khô ráo. Sẵn sàng. Công nghệ Climacool thấm hút và phân tán mồ hôi, giúp cơ thể luôn mát mẻ, khô ráo và tập trung tối đa.</li><li>Được làm từ chất vải dệt kim đôi, chiếc áo đấu này có phom dáng ôm sát, tôn lên vóc dáng và mang lại cảm giác thoải mái cả trong sân lẫn ngoài đời thường. Dù bạn đang trên khán đài hay trực tiếp trên sân, chiếc áo giúp bạn luôn tập trung và sẵn sàng cho pha bóng.</li><li>Các yếu tố thẩm mỹ trên chiếc áo đấu adidas này được thiết kế để truyền cảm hứng cho cả cầu thủ lẫn người hâm mộ, đại diện cho hành trình vươn tới những vùng đất chưa được khai phá và những thành tựu lớn hơn trên sân khấu bóng đá thế giới. Khoác lên mình chiếc áo với niềm tự hào và đồng hành cùng đội tuyển trên hành trình chinh phục những đỉnh cao mới.</li>"
    },
    {
        maSp: "10",
        tenSp: "Áo Đấu Sân Khách Nhật Bản 26 ",
        giaSp: "2.200.000",
        tenAnh: "japankhach.png",
        moTa:"Áo Đấu Sân Khách Đội Tuyển Nhật Bản 26 chính hãng, chất liệu cao cấp.",
        Thuonghieu: "Adidas",  
        dacDiem:"<li>Thiết kế ôm dáng</li><li>Cổ chữ V</li><li>Huy hiệu Đội Tuyển Nhật Bản dệt nổi</li><li>Màu sản phẩm: White </li><li>Phù hợp cho cả Nam và Nữ</li>",
        mota: "<li>Áo Đấu Sân Khách Đội Tuyển Nhật Bản 26 có thiết kế tối giản, hiện đại với tông màu trắng chủ đạo kết hợp các chi tiết màu đen và họa tiết graphic 12 vạch biểu tượng tượng trưng cho các cầu thủ. Mẫu áo này gây ấn tượng mạnh nhờ mang âm hưởng của đồng phục bóng chày.</li>"  
    },
    {
        maSp: "11",
        tenSp: "Áo Đấu Sân Nhà CLB Real Madrid 26/27",
        giaSp: "2.200.000",
        tenAnh: "realnha.avif",
        moTa:"Áo Đấu Sân Nhà CLB Real Madrid 26/27 chính hãng, chất liệu cao cấp.",
        Thuonghieu: "Adidas",  
        dacDiem:"<li>Thiết kế ôm dáng</li><li>Cổ tròn</li><li>Kết cấu dệt kim đôi</li><li>Logo Performance và huy hiệu thêu tinh xảo</li><li>Màu sản phẩm: White</li><li>Phù hợp cho cả Nam và Nữ</li>",
        mota:"<li>Áo đấu ứng dụng công nghệ Climacool thấm hút mồ hôi, mang lại cảm giác mát mẻ, thoải mái khi vận động.</li><li>Tự tin sải bước trên sân cỏ cùng Áo Đấu Sân Nhà CLB Real Madrid 26/27. Lấy cảm hứng từ những viên kim cương và ngọc trai quý giá trên vương miện hoàng gia, chiếc áo mang sắc xanh đậm tinh tế trên tay và cổ áo, phản chiếu sự chính xác và chiến thuật của câu lạc bộ.</li><li>Điểm nhấn màu sắc nổi bật trên biểu tượng 3 Sọc kinh điển gắn kết CLB Real Madrid với đại gia đình adidas, biến mỗi trận đấu thành một lễ hội tôn vinh di sản bóng đá, nơi truyền thống giao thoa cùng sự đổi mới.</li><li>Được thiết kế tối ưu cho hiệu suất thi đấu, mẫu áo này ứng dụng công nghệ Climacool vượt trội của adidas. Mát mẻ. Khô ráo. Sẵn sàng. Công nghệ Climacool giúp thấm hút và khuếch tán mồ hôi hiệu quả, mang lại sự thoáng mát để bạn tập trung tối đa mà không bị xao nhãng.</li><li>Kiểu dáng ôm sát trên nền vải dệt đôi mang lại vẻ ngoài gọn gàng và linh hoạt theo từng chuyển động, trong khi bề mặt nhanh khô giúp bạn luôn thoải mái từ tiếng còi khai cuộc cho đến những phút cuối cùng.</li><li>Dù bạn là một vận động viên chuyên nghiệp hay cổ động viên nhiệt thành, chiếc áo này được tạo ra để nâng tầm cả phong độ thi đấu lẫn phong cách. Hãy cảm nhận nguồn năng lượng của CLB Real Madrid và adidas mỗi khi bạn khoác lên mình niềm kiêu hãnh này.</li>"
    },
    {
        maSp: "12",
        tenSp: "Áo Đấu Sân Nhà CLB Real Madrid 26/27 Phiên Bản Authentic",
        giaSp: "3.000.000",
        tenAnh: "realnhavip.avif",
        moTa:"Áo Đấu Sân Nhà CLB Real Madrid 26/27 Phiên Bản Authentic chính hãng, chất liệu cao cấp.",
        Thuonghieu: "Adidas",  
        dacDiem:"<li>Thiết kế ôm dáng</li><li>Cổ tròn</li><li>Kết cấu vải jacquard dệt chuyển</li><li>Logo Ba Lá và huy hiệu thêu</li><li>Màu sản phẩm: White</li><li>Phù hợp cho cả Nam và Nữ</li>",
        mota:"<li>Áo đấu với công nghệ vải Climacool+ giúp làm mát hiệu quả khi thi đấu trên sân.</li><li>Hãy để Áo Đấu Sân Nhà CLB Real Madrid 26/27 Phiên Bản Authentic cùng bạn tự tin bước vào sân đấu. Lấy cảm hứng từ những viên kim cương và ngọc trai trên vương miện, chiếc áo đấu này ra mắt với phần cổ áo và tay áo có màu xanh lá cây đậm hơn, điểm xuyết nét tinh tế cho diện mạo trên sân bóng của bạn.</li><li>Được thiết kế cho hiệu suất đỉnh cao, kiểu dáng ôm sát được làm từ chất liệu jacquard dệt kim chuyển nhiệt giúp bạn thoải mái vận động. Chất vải nhanh khô chủ động kiểm soát độ ẩm kết hợp hiệu quả cùng các chất liệu hiệu suất cao hỗ trợ thoáng khí đảm bảo cảm giác thoải mái lâu dài.</li><li>Được trang bị kỹ thuật làm mát tiên tiến với công nghệ vải adidas Climacool+, chiếc áo hội tụ các chất liệu cải tiến kết hợp cùng kỹ thuật chế tác thế hệ mới mang lại cảm giác mát mẻ, khô ráo và không chút phân tâm.</li><li>Biểu tượng 3 Gạch nổi bật kết nối mẫu trang phục này với bộ sưu tập của mùa giải, tôn vinh sự chính xác và chiến lược của CLB Real Madrid trong từng trận đấu.</li><li>Cho dù bạn đang ở trên sân hay cổ vũ từ khán đài, chiếc áo đấu này được thiết kế dành cho những người đòi hỏi sự xuất sắc. Hãy tận hưởng cảm giác sảng khoái và để niềm đam mê của bạn dành cho CLB Real Madrid tỏa sáng.</li>"
    },
    {
        maSp: "13",
        tenSp: "Áo Đấu Sân Nhà Đội Tuyển Tây Ban Nha 2026",
        giaSp: "2.200.000",
        tenAnh: "taybannha.avif",
        moTa:"Áo Đấu Sân Nhà Đội Tuyển Tây Ban Nha 2026 chính hãng, chất liệu cao cấp.",
        Thuonghieu: "Adidas",  
        dacDiem:"<li>Thiết kế ôm dáng</li><li>Cổ tròn</li><li>Huy hiệu câu lạc bộ may đính</li><li>Màu sản phẩm: Vivid Red</li><li>Phù hợp cho cả Nam và Nữ</li>",
        mota:"<li>Áo đấu bóng đá Climacool tích hợp công nghệ Climacool giúp cơ thể luôn mát mẻ và khô ráo khi vận động.</li><li>Áo Đấu Sân Nhà Đội Tuyển Tây Ban Nha 26 là lời tri ân sâu sắc dành cho đam mê và di sản bóng đá Tây Ban Nha. Lấy cảm hứng từ những gam màu rực rỡ của lá cờ Tây Ban Nha, chiếc áo được thiết kế để tạo dấu ấn mạnh mẽ cả trên sân cỏ lẫn ngoài đời thường.</li><li>Thoáng mát. Khô ráo. Sẵn sàng. Công nghệ Climacool thấm hút và phân tán mồ hôi hiệu quả, giúp cơ thể luôn mát mẻ, khô thoáng và tập trung tối đa khi thi đấu. Chất vải dệt kim interlock nhanh khô mang đến cảm giác thoải mái trong những trận đấu căng thẳng, giúp bạn tập trung tối đa vào màn trình diễn của mình.</li><li>Phom dáng ôm gọn tôn lên đường nét cơ thể và linh hoạt theo từng chuyển động, kết hợp với cổ áo gân mang lại vẻ ngoài cổ điển đầy cuốn hút. Logo adidas và huy hiệu đội tuyển là điểm nhấn hoàn thiện thiết kế áo, góp phần tôn lên vẻ đẹp thanh lịch của tổng thể.</li><li>Dù bạn đang cổ vũ cuồng nhiệt trên khán đài hay trực tiếp ra sân thi đấu, hãy thể hiện niềm tự hào dành cho đội tuyển Tây Ban Nha với mẫu áo đấu mang đậm tinh thần bóng đá từ adidas này.</li>"
    },
    {
        maSp: "14",
        tenSp: "Áo Đấu Sân Nhà Đội Tuyển Tây Ban Nha 2026 Phiên Bản Authentic",
        giaSp: "3.000.000",
        tenAnh: "taybannhavip.avif",
        moTa:"Áo Đấu Sân Nhà Đội Tuyển Tây Ban Nha 2026 Phiên Bản Authentic chính hãng, chất liệu cao cấp.",
        Thuonghieu: "Adidas",  
        dacDiem:"<li>Thiết kế ôm dáng</li><li>Cổ tròn</li><li>Huy hiệu câu lạc bộ may đính</li><li>Màu sản phẩm: Vivid Red</li><li>Phù hợp cho cả Nam và Nữ</li>",
        mota:"<li>Áo đấu cổ điển được trang bị công nghệ Climacool+ giúp cơ thể luôn mát mẻ, khô thoáng và tập trung tối đa khi thi đấu.</li><li>Áo Đấu Sân Nhà Tây Ban Nha 26 Phiên Bản Authentic là lời tôn vinh dành cho sự thanh lịch và đam mê của bóng đá xứ sở bò tót. Lấy cảm hứng từ những gam màu rực rỡ của quốc kỳ Tây Ban Nha, chiếc áo đấu này được thiết kế để tạo dấu ấn cả trong và ngoài sân cỏ.</li><li>Áo được tích hợp công nghệ Climacool+ từ adidas. Công nghệ làm mát tiên tiến. Với công nghệ Climacool+, thiết kế tối ưu cùng chất liệu cao cấp kết hợp để mang lại cảm giác mát mẻ, khô ráo và tập trung tuyệt đối trong suốt trận đấu.</li><li>Được chế tác tỉ mỉ, chiếc áo đấu sở hữu phom dáng ôm gọn, vừa vặn theo cơ thể, giúp bạn di chuyển linh hoạt và đầy tự tin trong từng trận đấu. Cấu trúc dệt jacquard chuyển tiếp mang đến vẻ tinh tế và tăng khả năng thoáng khí, là lựa chọn thông minh cho những trận đấu căng thẳng.</li><li>Logo adidas và huy hiệu đội tuyển được in chuyển nhiệt dạng thấu kinh, tạo điểm nhấn hiện đại cho thiết kế mang phong cách cổ điển. Dù bạn đang cổ vũ trên khán đài hay thi đấu trên sân, chiếc áo đấu này vẫn luôn thể hiện trọn vẹn tinh thần bóng đá Tây Ban Nha — nơi truyền thống hòa quyện cùng đổi mới.</li>",
    },
    {
        maSp: "15",
        tenSp: "Áo Khoác Anthem Sân Nhà Đội Tuyển Argentina",
        giaSp: "2.300.000",
        tenAnh: "aokhoacargen.avif",
        moTa:"Áo Khoác Anthem Sân Nhà Đội Tuyển Argentina chính hãng, chất liệu cao cấp.",
        Thuonghieu: "Adidas",
        dacDiem:"<li>Kiểu dáng tiêu chuẩn</li><li>Khóa kéo dọc thân, cổ áo đứng</li><li>Chất vải dệt trơn</li><li>Màu sản phẩm: White</li><li>Phù hợp cho cả Nam và Nữ</li>",
        mota:"<li>Áo khoác có cổ áo đứng và khóa kéo dọc thân tạo nên vẻ ngoài táo bạo, lấy cảm hứng từ bóng đá.</li><li>Áo Khoác Anthem Sân Nhà Đội Tuyển Argentina là một điểm nhấn cá tính được kết tinh từ phong cách sống và tính chuyên dụng. Với ý tưởng thiết kế từ sự tiện dụng của áo đấu theo đội, mẫu áo này trở thành món phụ kiện lý tưởng cho cả người hâm mộ lẫn những người dẫn đầu xu hướng.</li><li>Chất vải sáng bóng điểm thêm cảm hứng hiện đại, toát lên năng lượng nhiệt huyết của từng trận đấu. Kết hợp cùng khóa kéo dọc thân tiện lợi, mẫu áo gây ấn tượng với phong thái tự tin nhờ phần cổ đứng thanh lịch, đồng điệu với di sản bóng đá cổ điển.</li><li>Được hoàn thiện với logo adidas Performance, chiếc áo khoác này là trợ thủ hoàn hảo để tôn lên diện mạo của bạn. Hãy cùng tôn vinh niềm đam mê bóng đá và biến mọi khoảnh khắc trở nên sống động như ngày thi đấu.</li>",
    },
    {
        maSp: "16",
        tenSp: "Áo Khoác Anthem Sân Nhà CLB Manchester United",
        giaSp: "2.500.000",
        tenAnh: "aokhoacMU.avif",
        moTa:"Áo Khoác Anthem Sân Nhà CLB Manchester United chính hãng, chất liệu cao cấp.",
        Thuonghieu: "Adidas",
        dacDiem:"<li>Kiểu dáng tiêu chuẩn</li><li>Khóa kéo dọc thân phối cùng cổ đứng</li><li>Kết cấu dệt trơn,lớp hoàn thiện vải bóng</li><li>Màu sản phẩm: Mufc Red</li><li>Phù hợp cho cả Nam và Nữ</li>",
        mota:"<li>Áo khoác nổi bật với thiết kế cổ đứng cổ điển mang đậm tinh thần bóng đá nguyên bản.</li><li>Hòa mình vào văn hóa bóng đá cùng Áo Khoác Anthem Sân Nhà CLB Manchester United, một biểu tượng mạnh mẽ của niềm tự hào câu lạc bộ và phong cách đương đại. Khơi nguồn cảm hứng từ thiết kế công năng của những chiếc áo đấu, mẫu áo khoác này chính là cầu nối hoàn hảo giữa hiệu năng thể thao và phong cách sống.</li><li>Chi tiết cổ đứng sắc sảo mang dáng dấp bóng đá kinh điển vào diện mạo hàng ngày của bạn, trong khi khóa kéo dọc thân cho phép phối đồ linh hoạt và đa năng.</li><li>Với phom dáng vừa vặn, chiếc áo mang lại sự thoải mái theo từng chuyển động, dù bạn đang cổ vũ cuồng nhiệt trên khán đài hay xuống phố cùng bạn bè. Chất vải dệt đảm bảo độ bền bỉ cùng cảm giác cao cấp, kết hợp với lớp hoàn thiện bóng nhẹ tạo nên một diện mạo hiện đại, bứt phá.</li><li>Adidas đưa di sản hiệu năng vào thiết kế này, giúp bạn kiêu hãnh tôn vinh CLB Manchester United thật phong cách ở bất cứ nơi đâu. Hãy nâng tầm vị thế cùng người bạn đồng hành lý tưởng cho những ngày thi đấu, những buổi dạo phố hay những cuộc tụ họp sôi động.</li>",
    },
    {
        maSp: "17",
        tenSp: "Áo đấu sân nhà CLB Manchester City 26/27",
        giaSp: "2.200.000",
        tenAnh: "manCT.avif",
        moTa:"Áo đấu sân nhà CLB Manchester City 26/27 chính hãng, chất liệu cao cấp.",
        Thuonghieu: "FUMA",
        dacDiem:"<li>Phom dáng: Tiêu chuẩn</li><li>Loại chất liệu chính: Vải jacquard hai mặt</li><li>Màu: Team Light Blue-Icy Blue</li><li>Phù hợp cho cả Nam và Nữ</li>",
        mota:"<li>Cảm nhận năng lượng từ khán đài khi bạn khoác lên chiếc áo đấu CLB Manchester City này. Được thiết kế để mang lại sự thoải mái, sản phẩm kết hợp chất liệu mịn cùng công nghệ dryCELL giúp thấm hút độ ẩm, phù hợp cho cả trên sân và ngoài sân. Màu sắc sân nhà và chi tiết đội bóng giúp bạn thể hiện phong cách ủng hộ câu lạc bộ.</li>",
    },
    {
        maSp: "18",
        tenSp: "Áo đấu sân nhà CLB Bayern Munich 26/27",
        giaSp: "2.200.000",
        tenAnh: "Bayern.avif",
        moTa:"Áo đấu sân nhà CLB Bayern Munich 26/27 chính hãng, chất liệu cao cấp.",
        Thuonghieu: "Adidas",
        dacDiem:"<li>Thiết kế ôm dáng</li><li>Cổ tròn</li><li>Kết cấu dệt kim đôi</li><li>Huy hiệu câu lạc bộ thêu tinh xảo</li><li>Thiết kế kẻ sọc</li><li>Màu sản phẩm: Better Scarlet / White</li><li>Phù hợp cho cả Nam và Nữ</li>",
        mota:"<li>Áo đấu ứng dụng công nghệ chất vải Climacool, mang đến cảm giác mát mẻ và khô thoáng.</li><li>Tôn vinh di sản bóng đá cùng Áo Đấu Sân Nhà FC Bayern 26/27 — thiết kế táo bạo thể hiện trọn vẹn lịch sử và niềm đam mê của câu lạc bộ. Mùa giải này đánh dấu sự trở lại của sắc đỏ kinh điển, kết hợp họa tiết sọc đỏ trên nền đỏ đầy năng lượng cùng cổ áo được làm mới, tiếp lửa cho cả cầu thủ lẫn người hâm mộ.</li><li>Sở hữu thiết kế ôm dáng, mẫu áo này ôm sát cơ thể và mang lại vẻ ngoài thuôn gọn và cảm giác thoải mái. Kết cấu vải dệt kim đôi chắc chắn giúp duy trì sự thoải mái, phù hợp cho nhu cầu mặc hằng ngày.</li><li>Đây là một thiết kế chuyên dụng với chất vải ứng dụng kỹ thuật tiên tiến từ adidas. Mát mẻ. Khô ráo. Sẵn sàng. Công nghệ Climacool thấm hút và phân tán mồ hôi hiệu quả, mang lại trải nghiệm khô ráo và tập trung tối đa khi vận động.</li><li>Logo thương hiệu adidas cùng huy hiệu câu lạc bộ thêu hoàn thiện diện mạo tổng thể, kết nối hài hòa giữa truyền thống và sự đổi mới hiện đại. Ký hiệu biểu tượng đặc trưng ở mặt trong cổ áo sau tạo dấu ấn nhận diện quen thuộc, dễ dàng nhận ra cả trên sân cỏ lẫn ngoài đời.</li>",
    },
    {
        maSp: "19",
        tenSp: "Áo đấu sân nhà CLB Bayern Munich 25/26",
        giaSp: "2.200.000",
        tenAnh: "Bayern2526.avif",
        moTa:"Áo đấu sân nhà CLB Bayern Munich 25/26 chính hãng, chất liệu cao cấp.",
        Thuonghieu: "Adidas",
        dacDiem:"<li>Thiết kế ôm dáng</li><li>Cổ tròn</li><li>Kết cấu dệt kim đôi</li><li>Huy hiệu FC Bayern thêu nổi</li><li>Màu sản phẩm: Red</li><li>Phù hợp cho cả Nam và Nữ</li>",
        mota:"<li>Chiếc áo đấu dành cho người hâm mộ FC Bayern, thể hiện trọn vẹn tình yêu bóng đá của bạn.</li><li>Một lời tri ân dành cho ngôi nhà của họ. Một sự khẳng định lại lý tưởng của họ. Chỉ cần quan sát kỹ chiếc áo đấu adidas của FC Bayern, bạn sẽ nhận ra ngay chữ M cỡ lớn được tô điểm bằng hai gam màu đỏ - trắng biểu tượng của đội bóng. Chữ M là viết tắt của “Munich”, được ẩn hiện một cách tinh tế nhờ thiết kế phá cách đầy ấn tượng. Chiếc áo này được thiết kế để mang đến cảm giác thoải mái và niềm tự hào cho người hâm mộ, với công nghệ AEROREADY thấm hút mồ hôi hiệu quả và huy hiệu CLB thêu tinh tế.</li>"
    },
    {
        maSp: "20",
        tenSp: "Áo đấu sân khách CLB Bayern Munich 25/26 ",
        giaSp: "3.000.000",
        tenAnh: "Bayernkhach.avif",
        moTa:"Áo đấu sân khách CLB Bayern Munich 25/26 chính hãng, chất liệu cao cấp.",
        Thuonghieu: "Adidas",
        dacDiem:"<li>Dáng slim fit</li><li>Cổ tròn</li><li>Huy hiệu FC Bayern thêu nổi</li><li>Màu sản phẩm: White</li><li>Phù hợp cho cả Nam và Nữ</li>",
        mota:"<li>Chiếc áo đấu dành cho cổ động viên FC Bayern đánh dấu 20 năm của Allianz Arena.</li><li>Tỏa sáng đầy tự hào. Suốt hai thập kỷ, Allianz Arena đã thắp sáng con đường đến vinh quang cho các fan FC Bayern. Lấy cảm hứng từ những trận đấu buổi tối ở Munich, mẫu áo đấu nổi bật với họa tiết trừu tượng ấn tượng cùng công nghệ AEROREADY kiểm soát ẩm, mang đến sự thoải mái cho các fan nhí khi cổ vũ đội bóng. Huy hiệu câu lạc bộ thêu trước ngực và họa tiết graphic sân vận động nhỏ sau cổ áo thể hiện niềm đam mê trong bạn.</li>",
    },
    ];  

// ==========================================
// 2. HÀM CHUNG CHO GIỎ HÀNG (FUNCTIONS)
// ==========================================
function themVaoGioTheoMa(maSp) {
    var sanPham = mangSanPham.find(x => x.maSp === maSp);
    if (sanPham) {
        themVaoGio(sanPham, 1);
    }
}

function themVaoGio(sanPham, soLuongThem) {
    var gio = JSON.parse(localStorage.getItem("gioHang")) || [];
    var spDaCo = gio.find(item => item.maSp === sanPham.maSp);
    
    if (spDaCo) {
        spDaCo.soLuong = (spDaCo.soLuong || 1) + soLuongThem;
    } else {
        sanPham.soLuong = soLuongThem;
        gio.push(sanPham);
    }
    
    localStorage.setItem("gioHang", JSON.stringify(gio));
    capNhatHeaderGioHang();
    alert("Đã thêm " + sanPham.tenSp + " vào giỏ hàng!");
}

function capNhatHeaderGioHang() {
    var gio = JSON.parse(localStorage.getItem("gioHang")) || [];
    var tongSoLuong = gio.reduce((sum, sp) => sum + (sp.soLuong || 1), 0);
    document.querySelectorAll(".so-luong-gio").forEach(the => the.innerText = tongSoLuong);
}

function xoaKhoiGio(index) {
    // 1. Lấy giỏ hàng từ localStorage
    var gio = JSON.parse(localStorage.getItem("gioHang")) || [];
    
    // 2. Xóa phần tử tại vị trí index
    gio.splice(index, 1);
    
    // 3. Lưu lại giỏ hàng đã cập nhật
    localStorage.setItem("gioHang", JSON.stringify(gio));
    
    // 4. Load lại trang để cập nhật giao diện
    location.reload(); 
}
function hienThiSanPham(ds){
    var khung = document.getElementById("danh-sach-san-pham");
    if(!khung) return;
    khung.innerHTML="";
    var thuMucAnh = khung.getAttribute("data-thu-muc-anh") || "assets/";
    var thuMucTrang = khung.getAttribute("data-thu-muc-trang") || "";
    ds.forEach(function(sanPham){
        var the = document.createElement("div");
        the.className="the-san-pham";
        the.innerHTML=`
            <img src="${thuMucAnh}${sanPham.tenAnh}">
            <h3 class="ten-san-pham">${sanPham.tenSp}</h3>
            <p class="gia-tien">${sanPham.giaSp}VNĐ</p>
            <div class="nhom-nut-bam">
                <a href="${thuMucTrang}chi-tiet.html?id=${sanPham.maSp}" class="nut-cam nut-trang">
                XEM CHI TIẾT
                </a>
                <button class="nut-cam"
                onclick="themVaoGioTheoMa('${sanPham.maSp}')">
                    THÊM VÀO GIỎ
                </button>
            </div>
        `;
        khung.appendChild(the);
    });

}
// ==========================================
// 3. SỰ KIỆN KHỞI TẠO TRANG (DOM RENDER)
// ==========================================
window.onload = function() {
    capNhatHeaderGioHang();
    // 1. RENDER DANH SACH SAN PHAM
    var khungChuaSanPham = document.getElementById("danh-sach-san-pham");
    if (khungChuaSanPham) {
        var thuMucAnh = khungChuaSanPham.getAttribute("data-thu-muc-anh") || "assets/";
        var thuMucTrang = khungChuaSanPham.getAttribute("data-thu-muc-trang") || "";
        // Điều kiện: Nếu ở trang chủ (thuMucTrang là "html/") thì chỉ lấy 4 sản phẩm, ngược lại lấy tất cả
        var sanPhamHienThi = (thuMucTrang === "html/") ? mangSanPham.slice(0, 4) : mangSanPham;
        hienThiSanPham(sanPhamHienThi);
        var oTim = document.getElementById("oTimKiem");
if(oTim){
    oTim.addEventListener("input",function(){
        var tuKhoa=this.value.toLowerCase();
        var ketQua=sanPhamHienThi.filter(function(sp){
            return sp.tenSp.toLowerCase().includes(tuKhoa);
        });
        hienThiSanPham(ketQua);
    });
}
    }

    // 2. RENDER TRANG CHI TIẾT
    var khungChiTiet = document.getElementById("khung-chi-tiet");
    if (khungChiTiet) {
        var idHienTai = new URLSearchParams(window.location.search).get("id");
        var spTimThay = mangSanPham.find(sp => sp.maSp === idHienTai);

        if (spTimThay) {
            khungChiTiet.style.display = "block";
            var thuMucAnh = khungChiTiet.getAttribute("data-thu-muc-anh") || "../assets/";
            
            document.getElementById("anh-chi-tiet").src = thuMucAnh + spTimThay.tenAnh;
            document.getElementById("ten-chi-tiet").innerText = spTimThay.tenSp;
            document.getElementById("thuong-hieu-chi-tiet").innerText =
                    spTimThay.Thuonghieu || "Đang cập nhật";
            
            if(document.getElementById("ten-gioi-thieu")) document.getElementById("ten-gioi-thieu").innerText = spTimThay.tenSp.toLowerCase();
            if(document.getElementById("mota")) document.getElementById("mota").innerHTML = spTimThay.mota;
            
            document.getElementById("mota-chi-tiet").innerText = spTimThay.moTa;
            document.getElementById("gia-chi-tiet").innerText = spTimThay.giaSp;
            document.getElementById("dac-diem-chi-tiet").innerHTML = spTimThay.dacDiem;
            
            document.getElementById("nut-them-gio").onclick = function() { 
                var sl = parseInt(document.querySelector(".o-so-luong").value) || 1;
                themVaoGio(spTimThay, sl); 
            };
        } else {
            document.getElementById("thong-bao-loi").style.display = "block";
        }
    }

    // 3. RENDER TRANG GIO HANG
    var danhSachGio = document.getElementById("danh-sach-gio");
    if (danhSachGio) {
        var gio = JSON.parse(localStorage.getItem("gioHang")) || [];
        var tong = 0;

        if (gio.length === 0) {
            danhSachGio.innerHTML = `<tr><td colspan="5" style="text-align:center;">Giỏ hàng trống!</td></tr>`;
        } else {
            gio.forEach(function(sp, index) {
                var giaSo = parseInt(sp.giaSp.replace(/\./g, ''));
                var thanhTien = giaSo * (sp.soLuong || 1);
                tong += thanhTien;
                
                var hang = document.createElement("tr");
                hang.innerHTML = `
                    <td>${sp.tenSp}</td>
                    <td>${sp.giaSp}VND</td>
                    <td>${sp.soLuong}</td>
                    <td>${thanhTien.toLocaleString('vi-VN')}VND</td>
                    <td><button onclick="xoaKhoiGio(${index})" class="nut-xam" style="margin-bottom:0; padding: 5px 10px;">Xóa</button></td>
                `;
                danhSachGio.appendChild(hang);
            });
        }
        document.getElementById("tong-tien").innerText = tong.toLocaleString('vi-VN');
    }
};
const sizeButtons = document.querySelectorAll(".nut-size");

sizeButtons.forEach(btn=>{
    btn.onclick = function(){

        sizeButtons.forEach(item=>{
            item.classList.remove("active");
        });

        this.classList.add("active");
    }
});
