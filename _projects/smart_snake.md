---
layout: page
title: Edge-AI Snake Robot for Cross-Domain Operations
title_zh: 跨域作业型边缘智能蛇形机器人
description_en: "Modular snake robot with composite-metal skeleton, 6-gait locomotion, and an edge-native embodied AI stack — exhibited at the China International Industry Fair (CIIF), Shanghai."
description_zh: "复合材料金属骨架模块化蛇形机器人，具备六种运动姿态与边缘端具身智能，展出于中国国际工业博览会（上海）。"
img: assets/img/smart_snake.png
importance: 2
category: research
gallery_key: smart-snake
date_label: "2025.09 – Present"

details_en: |
  This project develops a cross-domain snake robot — "Edge-AI Powered Snake Robot for Cross-Domain Operations" — targeting five industry pain points in existing snake robots: insufficient joint compliance ("can't bend"), edge compute bottlenecks ("can't compute"), limited perception in extreme environments ("can't see"), cascading mechanical failure ("can't be trusted"), and high lifecycle cost ("can't afford maintenance").

  The robot is built around a **composite-material metal skeleton** for impact resistance and corrosion tolerance in aerial, terrestrial, and underwater environments. A **fully modular architecture** (head module + joint modules + tail module) enables rapid production, on-site repair, and flexible reconfiguration. The edge intelligence stack runs on a domestic RISC-V heterogeneous SoC (6 TOPS, 2 W, 40×40 mm) and hosts the Snake Embodied Model Base — a visual-motor fusion framework combining deep 6D pose estimation, multi-object tracking, the Snake-RL locomotion algorithm, and real-time trajectory planning, achieving **30 FPS visual detection** and a **control response latency under 8 ms**, with a reported **85% improvement** in complex-terrain traversal rate.

  Six distinct gaits cover the full operational envelope: lateral undulation (≥0.3 m/s, clears 5 cm obstacles), forward undulation (35% more efficient than lateral, ≤0.15 Wh/m), arc rolling (minimum turning radius ≤0.6 m, response < 0.6 s), offset-sine steering (≤1.8× body footprint, ±3° heading accuracy), obstacle crossing and bypassing (crossing height ≥2× body diameter), and vertical climbing with surveillance (≥0.15 m/s climb speed, target recognition ≥95%). The platform also supports UAV-mounted aerial deployment and IP68-rated underwater operation.

details_zh: |
  本项目研发面向跨域作业场景的边缘智能蛇形机器人，针对现有蛇形机器人的五大痛点——"弯不动"（超冗余逆运动学与动力学不确定性）、"算不动"（边缘芯片算力不足）、"看不清"（极端环境感知局限）、"靠不住"（串联结构连锁失效）、"养不起"（全生命周期成本高昂）——通过硬件-软件协同设计加以解决，于中国国际工业博览会（上海）公开展示。

  机体采用**复合材料金属骨架**，兼具高刚性、抗冲击与防腐蚀能力，适配水下、高空及地面多种极端工况。**模块化架构**（蛇头模块 + 关节模块 + 蛇尾模块）支持快速量产与现场维护。边缘智能模块以国产 RISC-V 异构 SoC 为核心（算力 6 TOPS，功耗 2 W，尺寸 40×40 mm），部署蛇形具身大模型底座，融合深度 6D 位姿评估、多目标跟踪、Snake-RL 核心算法与实时轨迹规划，实现 **30 FPS 视觉检测**、**控制响应延迟 < 8 ms**，复杂地形通过率提升 **85%**。

  机器人具备六种运动姿态：侧向蜿蜒（≥0.3 m/s，可越 5 cm 障碍）、正向蜿蜒（效率较侧向提升 35%，≤0.15 Wh/m）、弧形滚动（最小转向半径 ≤0.6 m，响应 < 0.6 s）、偏置正弦转向（操作空间 ≤1.8 倍机身占地，角度精度 ±3°）、越障与绕障（越障高度 ≥2 倍机身直径）、攀爬监视（垂直攀爬 ≥0.15 m/s，目标识别 ≥95%）。平台同时支持无人机挂载空中协同作业与 IP68 级水下长时运行。

contributions_en:
  - "Led structural design and 3D modeling of the modular snake body — comprising head, joint, and tail modules — enabling rapid assembly, on-site replacement, and flexible reconfiguration"
  - "Designed the composite-material metal skeleton architecture, balancing structural rigidity, impact resistance, and corrosion tolerance for multi-domain deployment"
  - "Produced full 3D models of the robot chassis and joint assemblies, providing the geometric foundation for kinematic validation and manufacturing"
  - "Coordinated hardware layout within the joint modules to accommodate the edge SoC, serial bus servos, and inter-module communication channels"

contributions_zh:
  - "主导蛇形机器人模块化本体（蛇头、关节、蛇尾模块）的结构设计与三维建模，支撑快速装配、现场换件与灵活重构"
  - "设计复合材料金属骨架方案，在结构刚性、抗冲击与防腐蚀之间取得平衡，适配多域极端工况"
  - "完成机体与关节组件的完整三维模型，为运动学验证与生产制造提供几何基础"
  - "协调关节模块内部硬件布局，合理安排边缘 SoC、串行总线舵机与模块间通信接口的空间分配"
---
