var tipuesearch = {"pages":[{"tags":"misc","title":"About","url":"./pages/about/","text":"2016Fall 修課成員網誌"},{"tags":"Misc","title":"2016Fall 機械設計主題教學","url":"./2016fall-ji-jie-she-ji-zhu-ti-jiao-xue.html","text":"知識管理與最佳化應用實驗室試圖利用計算機程式、網際內容管理、電腦輔助設計實習與協同產品設計實習等課程, 進行與機械設計相關的主題式教學, 其中包含強化創造力的教學、令學員熟習六種工程表達方式, 並且俱備融入協同設計所需要的四大面向知識與技能. 機械設計主題教學 創造力三元素, 機械設計的六種表達, 協同設計的四大面向. 強化創造能力 - 自學力、程式力與想像力 (Creative Competencies) 熟習六種表達 - 口語、文字、2D、3D、理論與實體表達 (Six Presentation Methods) 融入協同設計 - 電腦、網路、軟硬體工具與協同專案 (Collaborative Designs) 2016 Fall CADP A 分組網頁: 第1組 : 40223103 40223109 40423111 40443111 第2組 : 40423101 40423103 40423104 40423117 40423136 40423144 第3組 : 40423105 40423115 40423119 40423128 40423139 40423149 第4組 : 40423106 40423107 40423108 40423121 40423125 40423140 第5組 : 40423109 40423110 40423113 40423130 40423131 40423138 第6組 : 40423112 40423116 40423118 40423127 40423137 40423152 第7組 : 40423114 40423115 40423120 40423122 40423124 第8組 : 40423123 40423129 40423132 40423133 40423155 40423157 第9組 : 40423126 40423135 40423150 40423154 第10組 : 40423141 40423143 40423145 40423146 40423147 40423148 以下為分組資料處理程式: content = open(\"2016fall_cadp_a_groups.txt\").read() #print(content) result = content.splitlines() #print(result) gno = 1 for i in range(len(result)): #print(result[i]) group = result[i].split(\":\") #列出組序 print(\"<a href='../g\"+str(gno)+\"'>第\"+str(gno)+\"組</a>:<br />\") #print(\"第\"+str(gno)+\"組:<br />\") #取 group 第2成員, 用逗點隔開納入數列後, 利用[:-1]去掉最後空白 #print(group[1].split(\",\")[:-1]) gmember = group[1].split(\",\")[:-1] for j in range(len(gmember)): #print(gmember[j]) print(\"<a href='../g\"+str(gno)+\"/\"+str(gmember[j])+\"'>\"+ \\ str(gmember[j])+\"</a> \") print(\"<br />\") gno = gno + 1"}]};