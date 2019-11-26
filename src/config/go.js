// 需要先定义全局变量，不然会报错
let go = window.go;
let gm = go.GraphObject.make; //定义模版，这里官网用的$太敏感，被我替换掉了
export default {
  data() {
    return {
      diagramData: [] //后台的数据
    }
  },
  mounted() {
    // 创建页面加载创建图表，不可以加在事件中，因为一个dom只可以画一个图
    this.myDiagram = gm(go.Diagram,
      this.$refs.myDiagramDiv, //gojs中可以直接取到id名（如‘id’）vue中不可以，所以用refs来取dom
      {
        initialContentAlignment: go.Spot.Center,
      }); // 图表居中显示
    var graygrad = gm(go.Brush, "Linear", {
      0: "#F5F5F5",
      1: "#F1F1F1"
    }); // 定义图表格式刷
    // 定义节点模版
    this.myDiagram.nodeTemplate = gm(
      go.Node, "Auto", {
        isShadowed: true
      }, // 是否投影
      // 定义节点的外部形状
      gm(go.Shape, "RoundedRectangle", // 形状为圆角矩形
        {
          fill: graygrad,
          stroke: "#D8D8D8"
        },
        new go.Binding("fill", "color")),
      // 定义节点的文本
      gm(go.TextBlock, {
          margin: 10,
          height: 40,
          font: "bold 11px Helvetica, bold Arial, sans-serif"
        },
        new go.Binding("text", "key")),
      gm(go.Panel, {
          defaultAlignment: go.Spot.TopLeft, //位置
          margin: 10,
        },
        new go.Binding("itemArray", "reasonsList") // 汉字说明
      )
    );
    // 连接线样式
    this.myDiagram.linkTemplate = gm(
      go.Link, {
        routing: go.Link.Orthogonal,
        corner: 5
      },
      gm(go.Shape, {
        strokeWidth: 3,
        stroke: "#555"
      })
    );

  },
  methods: {
    //init方法需要在加在图表前的事件中调用
    init() {
      // 从服务器请求JSON格式的文本数据
      let url = '';
      this.$http.get(url).then(function (response) {
        if (response.status === 200) {
          this.diagramData = response.data
          // 为双树创建模型
          this.myDiagram.model = new go.TreeModel(this.diagramData); //把数据放入图表中
          this.doubleTreeLayout(this.myDiagram);
        }
      }, function () {
        this.$Message.error('数据获取失败,请检查接口是否正常!');
      })
    },

    doubleTreeLayout(diagram) {

      // 根据方向，将节点和链接分成两组
      var leftParts = new go.Set( /*go.Part*/ );
      var rightParts = new go.Set( /*go.Part*/ );
      this.separatePartsByLayout(diagram, leftParts, rightParts);
      // 但是ROOT节点将在两个集合中

      //创建并执行两个TreeLayout，每个方向一个，

      //在不移动ROOT节点的情况下，在节点和链接的不同子集上
      var layout1 =
        gm(go.TreeLayout, {
          angle: 180, // 距离root的左侧距离
          arrangement: go.TreeLayout.ArrangementFixedRoots, // 布置单独的树，必选
          setsPortSpot: false
        });

      var layout2 =
        gm(go.TreeLayout, {
          angle: 0, // 距离root的右侧距离
          arrangement: go.TreeLayout.ArrangementFixedRoots,
          setsPortSpot: false
        });

      layout1.doLayout(leftParts);
      layout2.doLayout(rightParts);

      diagram.commitTransaction("Double Tree Layout");
    },
    separatePartsByLayout(diagram, leftParts, rightParts) {
      var root = diagram.findNodeForKey(this.ipData); // 获取中心点
      if (root === null) return;
      // ROOT节点由两个子树共享
      leftParts.add(root);
      rightParts.add(root);
      // 查看ROOT节点的所有直接子节点
      root.findTreeChildrenNodes().each(function (child) {
        // 这个节点在哪个方向延长
        var dir = child.data.dir;
        var coll = (dir === "left") ? leftParts : rightParts;
        // 从此子节点开始添加整个子树
        coll.addAll(child.findTreeParts());
        // 还添加了从ROOT节点到该子节点的链接
        coll.add(child.findTreeParentLink());
      });
    }
  }
}