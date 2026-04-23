---
layout: page
title: Dual-Vision Infinite-Roll Hand for Edge-Native Grasping
title_zh: 双视觉无限翻转灵巧手边缘端抓取
description_en: "Hardware-software co-design of an 11-DOF dexterous hand featuring dual-camera relay perception, an infinite-roll slip-ring wrist, and a reparameterized zero-shot detector achieving **16.3 FPS** on an edge NPU."
description_zh: "11 自由度灵巧手的硬件-软件协同设计：通过腹背双目接力感知与滑环无限翻转腕消除前后感知盲区与关节死锁，并以离线重参数化零样本检测器实现边缘端 **16.3 FPS** 语言引导抓取。"
img: assets/img/dexterous_hand.jpg
importance: 1
category: research
gallery_key: dexterous-hand
date_label: "2025.10 – Present"

details_en: |
  In this work, we address two intrinsic physical bottlenecks in front-rear dexterous grasping: a perceptual blind spot caused by a single palm-mounted camera, and a kinematic deadlock caused by bounded wrist rotation. Rather than compensating in software, we resolve both through electromechanical co-design.

  On the hardware side, a dorsal camera is integrated alongside the ventral camera on the hand chassis, and a direct-drive conductive slip-ring replaces the conventional bounded J1 wrist joint. Both cameras and the edge processor co-rotate with the hand, eliminating the need for high-bandwidth video transmission across the rotary joint. The slip-ring carries only six low-bandwidth channels (power rails and a shared serial bus), which was made possible by choosing a serial bus-servo architecture for the finger actuators.

  On the software side, a reparameterized zero-shot detector (YOLO-World backbone with offline CLIP text injection into the VL-PAN neck) runs on a **Rockchip RK3588 NPU**, allowing the network to operate as a vision-only model during online inference, thereby eliminating the computational overhead of text encoding. SiLU activations are replaced with ReLU for NPU compatibility, and the model is INT8-quantized with a 1.5 pp mAP cost in exchange for a 2.4× throughput gain, achieving **16.3 FPS** end-to-end.

  A deterministic state machine with an N=10 consensus buffer (~613 ms stabilization window) fuses semantic class and camera-source labels into "Where" and "What" routing decisions, triggering pre-calibrated grasping primitives for either forward or 180° flip-over paths. Proof-of-concept experiments over **40 physical trials** (two objects × two paths) yielded a **75% aggregate end-to-end success rate** without any task-specific fine-tuning.

details_zh: |
  本工作针对灵巧手前后方向抓取中的两个物理瓶颈——单腹侧摄像头引发的感知盲区，以及有界腕关节导致的运动学死锁——通过机电协同设计从硬件根源加以解决，而非依赖软件层面的补偿。

  硬件方面，在手掌底座上集成了腹侧（正面）与背侧（后视）双摄像头，形成前后互补的完整感知球；J1 腕关节引入直驱导电滑环，将关节行程从有界域扩展至无界连续旋转，物理消除翻转 180° 时的运动学死锁。两路摄像头与边缘处理器均随手部同步旋转，无需跨旋转接头传输高带宽视频信号——滑环仅需承载电源与串行总线共六路低带宽信号，这得益于手指驱动器统一采用串行总线伺服架构的早期设计决策。

  软件方面，采用"训练多模态、推理单模态"范式：离线将冻结的 CLIP 文本编码器生成的语义嵌入通过结构重参数化注入 VL-PAN 颈部，使网络在线推理时作为纯视觉模型运行，彻底消除文本编码器的在线计算负担。在**瑞芯微 RK3588 NPU** 上进一步将 SiLU 激活替换为 ReLU，并进行 INT8 量化，以 1.5 个百分点的 mAP 损耗换取 2.4× 吞吐量提升，最终实现 **16.3 FPS** 端到端推理。确定性状态机结合 N=10 帧共识缓冲（~613 ms 稳定窗口），将检测类别与相机来源解耦为"去哪"与"抓什么"两个决策维度，驱动预标定的抓取动作原语。**40 次实物实验**（两类物体 × 前后两条路径）验证了 **75% 的端到端成功率**，无需任何任务特化微调。

contributions_en:
  - "Designed a dorsal-ventral dual-camera relay topology for complementary front-rear perception, eliminating the structural perceptual blind spot of single eye-in-hand configurations"
  - "Integrated a direct-drive conductive slip-ring into the J1 wrist joint, enabling infinite continuous roll and removing kinematic deadlock for rearward flip-over grasps"
  - "Deployed a reparameterized zero-shot detector (YOLO-World + offline CLIP injection, SiLU→ReLU, INT8) at **16.3 FPS** on an RK3588 NPU with no online text encoding"
  - "Built a deterministic dual-path state machine with an N=10 consensus buffer, completely decoupling spatial routing (front/rear) from the grasping configuration"
  - "Validated the system end-to-end with a **75% success rate** across **40 physical trials** without task-specific fine-tuning"

contributions_zh:
  - "设计腹背双摄像头接力感知拓扑，在手部机架上同时集成正面与后视视觉，从拓扑层面消除单眼式感知盲区"
  - "将直驱导电滑环集成至 J1 腕关节，实现无限连续翻转，从机械层面根除翻转 180° 的运动学死锁"
  - "通过离线 CLIP 文本注入与结构重参数化、SiLU→ReLU 算子替换、INT8 量化，在 RK3588 NPU 上以 **16.3 FPS** 完成零样本语言引导检测，在线推理无需文本编码器"
  - "构建确定性双路状态机，以 N=10 帧共识缓冲将空间路由（前/后）与抓取构型完全解耦"
  - "完成 **40 次**实物实验，端到端成功率达 **75%**，无需任务特化微调"
---
