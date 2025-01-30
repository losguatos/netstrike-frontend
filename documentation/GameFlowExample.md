# NetStrike Game Flow

## 🎮 Game Setup

- **Starting CPU:** 5 (Regenerates +3 per turn, max cap 6)
- **Starting RAM:** 128
- **Starting Integrity (Health):** 20
- **Each player draws 4 random cards**

---

## 🕹 Turn 1

### 🎯 Payload Phase (Players Secretly Choose Cards)

- **P1 plays:** **DDoS Barrage (3 CPU, 48 RAM)** – Deals 3 damage.
- **P2 plays:** **Firewall Patch (2 CPU, 32 RAM)** – Blocks 2 damage.

### 💥 Execution Phase (Effects Resolve Simultaneously)

- **P1's DDoS Barrage** deals 3 damage, but **P2's Firewall Patch** blocks 2.
  - **P2 only takes 1 damage (Integrity: 19).**
- **P2's Firewall Patch fully resolves, no further effects.**

### 🔄 Purge Phase (CPU Regenerates, Temporary Effects End)

- **P1 spent 3 CPU → Regains 3 → Now has 5 CPU next turn.**
- **P2 spent 2 CPU → Regains 3 → Now has 6 CPU next turn.**

---

## 🕹 Turn 2

### 🎯 Payload Phase

- **P1 plays:** **Trojan Injection (3 CPU, 64 RAM)** – Deals 2 damage, opponent loses 1 CPU next turn.
- **P2 plays:** **Overclock (3 CPU, 64 RAM)** – Gains 3 CPU this turn but loses 1 Integrity.

### 💥 Execution Phase

- **P1's Trojan Injection:**
  - Deals **2 damage** to **P2 (Integrity: 17).**
  - **P2 will lose 1 CPU next turn.**
- **P2's Overclock:**
  - Gains **+3 CPU instantly (CPU: 9).**
  - Loses **1 Integrity (Integrity: 16).**

### 🔄 Purge Phase

- **P1 spent 3 CPU → Regains 3 → Now has 5 CPU.**
- **P2 spent 3 CPU but had Overclock bonus (+3) → Ends with 6 CPU.**
- **P2 loses 1 CPU next turn due to Trojan Injection (Next turn starts with 5 instead of 6).**

---

## 🕹 Turn 3

### 🎯 Payload Phase

- **P1 plays:** **Exploit Chain (5 CPU, 96 RAM)** – Deals 4 damage, but 6 if played with another attack.
- **P2 plays:** **Intrusion Detection (3 CPU, 64 RAM)** – Blocks 2 damage and reveals 1 opponent card next turn.

### 💥 Execution Phase

- **P1's Exploit Chain:**
  - Deals **4 damage** to **P2 (Integrity: 12).**
- **P2's Intrusion Detection:**
  - Blocks **2 damage** (so P2 only takes 2).
  - **Next turn, P2 sees 1 of P1’s cards.**

### 🔄 Purge Phase

- **P1 spent 5 CPU → Regains 3 → Now has 4 CPU.**
- **P2 spent 3 CPU → Regains 3 → Now has 5 CPU.**
- **P2 gains insight into P1’s next hand.**

---

## 🕹 Turn 4

### 🎯 Payload Phase

- **P1 plays:** **Packet Sniffer (2 CPU, 96 RAM)** – Gain 1 CPU and see 1 random card in opponent’s hand.
- **P2 plays:** **Adaptive Firewall (4 CPU, 64 RAM)** – Blocks 3 damage and increases shield capacity permanently by 1.

### 💥 Execution Phase

- **P1's Packet Sniffer:**
  - Gains **+1 CPU (now at 5).**
  - Sees **1 card from P2’s hand.**
- **P2's Adaptive Firewall:**
  - Blocks **3 damage (no attack, so no effect this turn).**
  - **Increases shield capacity permanently.**

### 🔄 Purge Phase

- **P1 spent 2 CPU → Regains 3 → Now has 6 CPU.**
- **P2 spent 4 CPU → Regains 3 → Now has 4 CPU.**

---

## 🔹 Summary After 4 Turns

| Player | Integrity | CPU | RAM | Notes                                                    |
| ------ | --------- | --- | --- | -------------------------------------------------------- |
| **P1** | **20**    | 6   | 128 | Strong CPU control, gaining insight into P2’s plays.     |
| **P2** | **12**    | 4   | 128 | Took some damage, but Adaptive Firewall boosted defense. |

---

## 🚀 Takeaways from the Simulation

✅ **Game flow is smooth:** Each turn is meaningful, and strategic depth is emerging.
✅ **Defensive cards like Firewall Patch & Adaptive Firewall feel impactful.**
✅ **Trojan Injection & Exploit Chain created pressure on P2.**
✅ **Packet Sniffer & Intrusion Detection allow for tactical play.**
