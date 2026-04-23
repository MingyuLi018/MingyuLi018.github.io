---
layout: page
title: Precision Grasping with 2D Camera and Embedded System
title_zh: 二维相机与嵌入式系统限定下的机械臂精准抓取
description_en: "5-DOF robotic arm achieving ≥98% grasp success and ±0.5 mm positioning accuracy under strict constraints: 2D-only vision and an embedded Jetson platform."
description_zh: "五自由度机械臂在仅有二维平面相机与嵌入式平台的严苛限制下，实现 ≥98% 抓取成功率与 ±0.5 mm 定位精度。"
img: assets/img/car_race_arm.jpg
importance: 3
category: engineering
gallery_key: robotic-arm
date_label: "2025 – 2026.03"

details_en: |
  In this project, we designed and built a 5-DOF robotic arm grasping system under two hard constraints: only a 2D planar camera (no depth sensor) and a resource-constrained embedded platform. The goal was to handle randomly placed materials with industrial-grade accuracy and reliability at low cost.

  Three innovation layers address the core bottlenecks. First, the end-effector was redesigned from a conventional mechanical gripper to a **multi-layer bellows vacuum suction cup**, eliminating deformation and damage on rubber and elastic materials and lifting grasp success from 85% to **≥98%**. Second, magnetic sensors and a magnetic scale were added to the most active Z-axis (vertical) and X-axis (lateral) joints, forming a closed-loop zero-position calibration that eliminates open-loop drift without adding meaningful compute overhead. Third, a **hybrid 2D-camera + infrared rangefinder** architecture provides the missing depth dimension: the rangefinder confirms a safe 5–10 mm hover height, then a visual closed-loop cycle (capture → compare → correct → recapture) converts pixel offsets to pulse commands for sub-millimetre X/Y fine-positioning.

  The algorithm pipeline was **deployed on a Jetson embedded board**, optimized for millisecond-level real-time response within the NPU's memory and compute budget. The final system achieves **±0.5 mm positioning accuracy**, **≥98% grasp success rate**, and a **15% reduction in cycle time** through improved motion planning — validated across repeated grasping trials under industrial workshop conditions.

details_zh: |
  本项目在两个硬性约束下设计并搭建五自由度机械臂抓取系统：仅有二维平面相机（无深度信息）以及算力和内存受限的嵌入式平台。目标是以低成本在物料随机摆放的工业场景中实现高精度、高可靠的自动抓取。

  系统从三个层面突破核心瓶颈。执行层将传统机械夹爪替换为**多层波纹真空吸盘**，彻底消除对橡胶、弹性物料的形变与损伤，抓取成功率从 85% 跃升至 **≥98%**。定位层在运动最频繁的 Z 轴（升降）与 X 轴（横移）加装磁敏传感器与磁栅尺，实现低成本闭环零位校准，消除开环累积漂移。控制层采用**二维相机 + 红外测距传感器混合架构**：红外传感器确认 5–10 mm 安全悬停高度，弥补二维相机缺乏深度信息的短板；随后视觉闭环（拍照 → 比对 → 调整 → 再拍照）将像素偏差实时转换为脉冲量，驱动 X/Y 轴微调至亚毫米级重合。

  算法流水线完整**部署于 Jetson 嵌入式板**，经轻量化优化后在有限算力与内存预算内实现毫秒级实时响应。最终系统定位精度达 **±0.5 mm**，抓取成功率 **≥98%**，动作规划优化后综合节拍缩短 **15%**，并通过多次抓取循环的工况测试验证。

contributions_en:
  - "Built and assembled the 5-DOF robotic arm hardware, including end-effector retrofit from mechanical gripper to vacuum suction cup and sensor integration (magnetic encoder + magnetic scale on Z/X axes)"
  - "Created full 3D models of the arm structure and joint assemblies, providing the geometric basis for kinematic design and hardware layout"
  - "Deployed the complete vision-servo algorithm pipeline onto the Jetson embedded board, performing lightweight optimization for millisecond-level real-time response within embedded memory and compute constraints"
  - "Validated end-to-end system performance through repeated grasping trials, confirming ≥98% success rate and ±0.5 mm positioning accuracy"

contributions_zh:
  - "负责五自由度机械臂的硬件搭建与组装，包括末端执行器由机械夹爪改型为真空吸盘、Z/X 轴磁敏传感器与磁栅尺的集成安装"
  - "完成机械臂本体与关节组件的完整三维建模，为运动学设计与硬件布局提供几何基础"
  - "将完整视觉伺服算法流水线部署至 Jetson 嵌入式板，进行轻量化优化，在有限算力与内存约束下实现毫秒级实时响应"
  - "通过多轮抓取循环测试完成端到端系统验证，确认 ≥98% 抓取成功率与 ±0.5 mm 定位精度"
---
