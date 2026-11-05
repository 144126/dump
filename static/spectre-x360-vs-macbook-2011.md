# Should the asker swap an HP Spectre x360 G1 (Core i7, 8 GB, 256 GB SSD; overheats and turns off) for a MacBook Pro Late 2011 (Core i5, 16 GB, SSD)?

Research date 2026-11-05 · 21 search turns · 52 URLs fetched, 43 readable.

## Answer to send

Don't swap. Fix the HP's cooling first.

1. Your HP turning off under heavy work is heat protection, not lack of RAM. Low RAM makes a PC freeze or crash. It does not switch it off. After about 10 years, dust blocks the fan and heatsink and the thermal paste dries out. A cleaning/servicing job is about ₦5,000–₦15,000 in Lagos. Ask for new thermal paste too. If it only turns off on battery, or the temperature is normal when it turns off, it's the battery or charger, not heat. A PK03XL battery is about ₦32,000 on Jiji.
2. The MacBook is the older, slower machine. Its Core i5-2435M is from 2011. On PassMark it scores 2053 multi-core vs 2981 for the HP's i7-5600U, or 2804 for the i7-5500U (about 30% lower). It is a 35 W chip vs the HP's 15 W, so it makes more heat, not less.
3. The Mac's software is stuck. Its last macOS is High Sierra, and Apple's last update for that was in 2020. Current Chrome needs macOS 13. Firefox still sends it security fixes only until March 2027. Newer macOS needs a hack (OpenCore), and its graphics chip is badly supported there.
4. Its only real win is 16 GB RAM vs your 8 GB. That helps with many tabs and apps. It does nothing for the shutdowns.
5. If your HP runs Windows 10, it can get free security updates until 12 October 2027: Settings > Update & Security > Windows Update > enroll in ESU.
6. If you still need more RAM after the fix, sell the HP and add a little for a used 8th-gen laptop. A ThinkPad T480 with 16 GB is about ₦280,000 on Jiji. It is about 3x the Mac's multi-core speed and runs Windows 11 officially.

Check first: Settings > System > About > Processor. "i7-5xxxU" means 5th gen, which is what the Spectre x360 G1 shipped with. If it really says "i7-3xxx", the two chips are about equal, and the advice stays the same.

## Frame

**Question:** Is a straight swap better for the asker's heavy tasks and many open apps, on their budget? "Better" means it runs that load without turning off, on software that still gets security fixes, for the least money. "Turns off" means a sudden power-off. "3rd generation" clashes with the model name: HP's service guide lists no 3rd- or 4th-gen chip for this line. Both branches are run.

**Scope:** these two used laptops. The asker is assumed to be in Nigeria (from the wording); prices are Jiji Nigeria asking prices. Date 2026-11-05.

**Axis:** mechanism: what makes the HP turn off now, and what makes each laptop usable now. How fast dust builds up (ontogeny) is under Open.

**Kind:** design: what a laptop must satisfy to work for this user. It has one empirical rung: why the HP turns off.

**Decision:** swap or keep, and what to do instead. If RAM were the binding limit, more RAM would win. If heat or OS support binds, the swap fails.

**Grades:** strong = vendor primary page, or 2+ independent sources agree. moderate = one primary source, or primary plus inference. weak = one secondary source, vendor blog or single anecdote.

**Floor:** a laptop works for this load only while four conditions hold together: (1) heat out ≥ heat in at that load, (2) RAM ≥ the working set, (3) an OS and browser that still get security fixes and run the needed apps, (4) enough CPU. The HP fails only (1), and that is maintenance. The Mac fails (3) for good, is weaker on (4), and wins only (2). — kind: constraint — moderate (each part strong; the four-part join is my synthesis)

**Load-bearing:**
- (1) Heat removal. A blocked fin inlet "reduces the airflow rate through the heat sink" (Nabi et al.), and one cleaning cut CPU temperature by 9 °C (Computerworld). RAM size is not on the shutdown path: running out of memory causes "freezing, crashing" (Microsoft), not a power-off.
- (3) OS support. Remove it and the browser stops getting fixes whatever the hardware: Chrome needs macOS 13, and Firefox ESR 115 on macOS 10.12–10.14 ends March 2027.

**Fake vs real:** a real better option raises the limit that actually binds (heat) and keeps patched software. A fake one shows bigger headline specs (16 GB, "Pro", SSD, "runs Sonoma") on an older, hotter, unpatched machine. It gives itself away over time: Chrome won't install, Firefox stops updating after March 2027, and the 35 W chip runs hot under the same load.

## Design test

Works (meets all four):
- The HP cleaned and repasted, on Windows 10 with ESU to 12 October 2027, if 8 GB covers the working set.
- A used 8th-gen 16 GB business laptop such as the ThinkPad T480: Windows 11 supported, about ₦280,000 asking.
- Less heat in: fewer heavy apps at once on the HP. This meets (1) by cutting heat in instead of raising heat out, at a cost to (4).

Fails (breaks one):
- The swap to the 2011 Mac on High Sierra breaks (3): no Chrome, no OS fixes since Security Update 2020-006, and Firefox only to March 2027.
- More RAM to stop the shutdowns looks like it should work (the adviser's logic) but breaks (1): RAM does not move heat, and on the HP it is soldered anyway.
- The Mac with OpenCore Legacy Patcher to newer macOS weakens (3): non-Metal GPU, a Tahoe build still in pre-release, and Firefox broken on HD 3000.

## Ladder A: why the HP turns off (shortest; floor at the bottom)

L0 The HP turns off under heavy tasks or many apps — weak (as reported) — rival: it crashes (blue screen) or freezes rather than powering off — split by: whether the screen goes black at once with no error (power-off) or freezes or shows an error first (crash)
L1 It reaches the critical trip temperature and the firmware or OS shuts it down — strong — rival: it runs out of RAM (8 GB) — split by: running out of memory gives freezes and crashes, not a power-off, so this rival is killed; worn battery or charger is under Rivals standing
> ACPI's critical trip point means shutdown — https://dyn.manpages.debian.org/buster/freebsd-manpages/acpi_thermal.4freebsd §hw.acpi.thermal.tz%d._CRT — "Temperature to start critical shutdown (S5)."
> Running out of memory means freezes and crashes — https://learn.microsoft.com/en-us/troubleshoot/windows-client/performance/introduction-to-the-page-file §System committed memory — "If the system commit charge reaches the system commit limit, the system and processes might not get committed memory. This condition can cause freezing, crashing, and other malfunctions."
L2 Throttling comes before shutdown, so reaching shutdown means the cooler can no longer remove even the throttled heat — moderate — rival: the cooling was always too weak by design — split by: reviews of the new machine report throttling and no shutdowns; a design-only cause would show shutdowns from day one
> The passive trip throttles the CPU — https://dyn.manpages.debian.org/buster/freebsd-manpages/acpi_thermal.4freebsd §hw.acpi.thermal.tz%d._PSV — "Temperature to start passive cooling by throttling down CPU, etc."
> The G1 with i7-5600U — https://www.notebookcheck.net/HP-Spectre-Pro-x360-G1-H9W43EA.150928.0.html §Specs — "Intel Core i7-5600U 2c/4t 2 x 2.6 - 3.2 GHz (Intel Core i7)"
> Review when new (3DNews.ru, 10/28/2015) — https://www.notebookcheck.net/HP-Spectre-Pro-x360-G1-H9W43EA.150928.0.html §Reviews — "Negative: Poor cooling system."
> Review when new (Ferra.ru, 10/23/2015) — https://www.notebookcheck.net/HP-Spectre-Pro-x360-G1-H9W43EA.150928.0.html §Reviews — "Negative: Throttling under load"
> No review on that page mentions shutdowns — https://www.notebookcheck.net/HP-Spectre-Pro-x360-G1-H9W43EA.150928.0.html — searched for "shut": 0 hits
L3 The cooling path has worn: dust blocks the heatsink's fin inlet and cuts airflow, the thermal paste has aged, the fan may be worn — moderate (paste aging weak) — rival: the fan has died and needs a part, not a cleaning — split by: HP's built-in UEFI fan test (esc, then f2 at power-on)
> Fin-inlet blockage is what degrades a heat sink — https://khazna.ku.ac.ae/en/publications/prediction-of-thermal-performance-degradation-of-air-cooled-fine-/ §Abstract — "heat sink thermal performance degradation is essentially attributable to leading edge entrance blockage, which reduces the airflow rate through the heat sink by increasing pressure drop."
> One cleaning cut CPU temperature by 9 °C — https://www.computerworld.com/article/1469312/just-what-does-dust-do-to-a-pc.html — "A simple cleaning had reduced the temperature of the CPU by an extra 16.2° F (9° C) and increased the fan speed by 419 rpm."
> HP ships new paste with each heat sink part — https://h10032.www1.hp.com/ctg/Manual/c04807803.pdf §Heat sink — "NOTE: The heat sink spare part kit includes replacement thermal material."
> HP's diagnostics start, step 1 — https://h10032.www1.hp.com/ctg/Manual/c04807803.pdf §Using HP PC Hardware Diagnostics UEFI — "Turn on or restart the computer, quickly press esc."
> HP's diagnostics start, step 2 — https://h10032.www1.hp.com/ctg/Manual/c04807803.pdf §Using HP PC Hardware Diagnostics UEFI — "Press or tap f2."
> The UEFI tool has a fan test — https://ftp.hp.com/pub/softpaq/sp156501-157000/sp156721.html §HP PC Hardware Diagnostics UEFI — "Improved Fan thermal test"
> Measured paste aging — searched for a controlled study of laptop thermal paste aging: none found (only rules of thumb)

Floor A: physical. At a fixed chip power, less airflow and worse chip-to-heatsink contact raise the die temperature until it crosses the trip point. The next "why" (why dust collects) leaves this question. — moderate

## Ladder B: why the Mac looks better, and why it isn't

L0 Someone says the MacBook Pro Late 2011 (Core i5, 16 GB, SSD) is the better option for the budget — weak (as reported) — rival: the adviser gains from the swap — split by: whether the claim survives on specs alone (rungs below)
L1 The claim rests on one spec line: 16 GB against the HP's 8 GB, and the HP's 8 GB is soldered — strong — rival: the Mac is the newer or faster machine — split by: chip age and benchmark (Q4 2011 and 2053/1281 against Q1 2015 and 2981/1739), so this rival is killed
> The Mac's CPU — https://www.macintoshrepository.org/mac-specs/634-macbook-pro-13-inch-quot-core-i5-quot-2-4-late-2011 — "Processor Type: Core i5 (I5-2435M)"
> Apple ships 4 GB and states 8 GB max — https://support.apple.com/kb/SP645 §Processor and memory — "4GB (two 2GB SO-DIMMs) of 1333MHz DDR3 memory; two SO-DIMM slots support up to 8GB"
> 16 GB works in practice (conflicts with Apple's 8 GB; both kept) — https://www.ifixit.com/Topic/MacBook_Pro_13%22_Unibody_Late_2011 §Memory — "comes with 4 GB RAM standard, and accepts a maximum of 16 GB."
> OWC sells 16 GB kits for MacBookPro8,1 — https://eshop.macsales.com/shop/memory/Apple_MacBook_MacBook_Pro/Upgrade/DDR3_1333MHz_SDRAM — "Up to 16GB memory"
> HP's 8 GB is part of the system board — https://h10032.www1.hp.com/ctg/Manual/c04807803.pdf §System board spare part 808445-601 — "dual core, 15 W), 8.0-GB of system memory, and the Windows 8 Professional"
> Mac CPU score — https://www.cpubenchmark.net/cpu.php?cpu=Intel+Core+i5-2435M+%40+2.40GHz — "Multithread Rating 2053 Single Thread Rating 1281"
> Mac CPU age — https://www.cpubenchmark.net/cpu.php?cpu=Intel+Core+i5-2435M+%40+2.40GHz — "CPU First Seen on Charts: Q4 2011"
> HP i7-5600U score — https://www.cpubenchmark.net/cpu.php?cpu=Intel+Core+i7-5600U+%40+2.60GHz — "Multithread Rating 2981 Single Thread Rating 1739"
> HP i7-5600U age — https://www.cpubenchmark.net/cpu.php?cpu=Intel+Core+i7-5600U+%40+2.60GHz — "CPU First Seen on Charts: Q1 2015"
> The other i7 HP lists for this line — https://h10032.www1.hp.com/ctg/Manual/c04807803.pdf §Product description — "Intel Core i7-5500U 2.40-GHz"
> i7-5500U score — https://www.cpubenchmark.net/cpu.php?cpu=Intel+Core+i7-5500U+%40+2.40GHz — "Multithread Rating 2804 Single Thread Rating 1650"
> No 3rd- or 4th-gen chip in HP's guide for this line — https://h10032.www1.hp.com/ctg/Manual/c04807803.pdf — searched for regex "i[357]-[34][0-9]{3}": 0 hits
> If it really is a 3rd-gen i7 (i7-3517U), it ties the Mac — https://www.cpubenchmark.net/cpu.php?cpu=Intel+Core+i7-3517U+%40+1.90GHz — "Multithread Rating 2115 Single Thread Rating 1327"
L2 16 GB does not touch the asker's failure: the failure is a heat trip, and the Mac's chip has a 35 W heat budget against the HP's 15 W — strong — rival: more RAM means less swapping, so less work and less heat — split by: swapping shows up as freezes, not trips (Ladder A, L1), and the CPU load of the heavy task is the same on either machine
> Mac chip heat budget — https://www.cpubenchmark.net/cpu.php?cpu=Intel+Core+i5-2435M+%40+2.40GHz — "Typical TDP: 35 W"
> HP chip heat budget — https://www.cpubenchmark.net/cpu.php?cpu=Intel+Core+i7-5600U+%40+2.60GHz — "Typical TDP: 15 W"
L3 Even running cool, the Mac is a software dead end: Apple caps it at High Sierra, whose final update was Security Update 2020-006; current Chrome needs macOS 13; Firefox ESR 115 on 10.12–10.14 runs only to March 2027 — strong — rival: OpenCore Legacy Patcher lifts the cap — split by: OCLP flags this exact model "non-Metal GPU (macOS 11+)", its Tahoe build is a pre-release that warns of crashes, and Firefox is broken on HD 3000 on patched macOS, so the rival is weakened, not dead (see Rivals standing)
> Mojave excludes the Late 2011 — https://support.apple.com/en-us/111930 §Mac Hardware Requirements — "These Mac models are compatible with macOS Mojave:"
> Mojave's MacBook Pro cutoff — https://support.apple.com/en-us/111930 §Mac Hardware Requirements — "MacBook Pro (Mid 2012 or newer)"
> High Sierra includes it — https://support.apple.com/en-au/111934 — "These Mac models are compatible with macOS High Sierra:"
> High Sierra's MacBook Pro cutoff — https://support.apple.com/en-au/111934 — "MacBook Pro (Mid 2010 or newer)"
> High Sierra's last update — https://mrmacintosh.com/security-update-2020-006-for-mojave-high-sierra-safari-14-0-1/ — "The 2020-006 Security Update will also be macOS High Sierra’s final update."
> Chrome's macOS floor — https://support.google.com/chrome/answer/95346?hl=en&co=GENIE.Platform%3DDesktop §Mac — "To use Chrome on Mac, you need macOS 13 Ventura and up."
> Firefox on 10.12–10.14 ends March 2027 — https://whattrainisitnow.com/release/?version=esr — "We have decided to extend support to ESR 115 only on Windows 7-8.1 and macOS 10.12-10.14 up to March 2027."
> Firefox ESR 115 end date — https://whattrainisitnow.com/release/?version=esr — "ESR 115 branch is EOL April 6"
> That site is Mozilla's — https://whattrainisitnow.com/about/ — "This website is Mozilla's official reference for all things related to the Firefox release schedule."
> OCLP's entry for this model — https://dortania.github.io/OpenCore-Legacy-Patcher/MODELS.html — "MacBook Pro (13-inch, Late 2011) MacBookPro8,1 - non-Metal GPU (macOS 11+)"
> OCLP's stated range — https://raw.githubusercontent.com/dortania/OpenCore-Legacy-Patcher/main/README.md — "Currently, OpenCore Legacy Patcher officially supports patching to run macOS Big Sur through Tahoe installs."
> OCLP's Tahoe build is a pre-release — https://github.com/dortania/OpenCore-Legacy-Patcher/releases §3.0.0-rc.5 — "This is a prerelease for OpenCore Legacy Patcher 3.0.0. Expect issues resulting in instability, system crashes, and potential data loss."
> Firefox broken on HD 3000 (patched macOS) — https://dortania.github.io/OpenCore-Legacy-Patcher/TROUBLESHOOT-NONMETAL.html §Broken Firefox and Thunderbird (HD 3000) — "Firefox and Thunderbird are now broken on HD 3000 due to removal of HD 3000 support by Mozilla in v145."
> The Mac's GPU is HD 3000 — https://support.apple.com/kb/SP645 §Graphics and video support — "Intel HD Graphics 3000 with 384MB of DDR3 SDRAM shared with main memory"

Floor B: contingent. The cutoff is Apple's and Google's support decision for this hardware. There is no deeper reason inside this question, and no money spent on the Mac moves it. — strong

**Converge:** yes, on the constraint floor and on the decision. Ladder A's failing condition is physical and cheap to fix on the HP. Ladder B's is contingent and permanent on the Mac.

### Other differences (all favour the HP)
> Mac ports — https://support.apple.com/kb/SP645 §Connections and expansion — "Two USB 2.0 ports (up to 480 Mbps)"
> HP ports — https://www.notebookcheck.net/HP-Spectre-Pro-x360-G1-H9W42EA.143349.0.html — "The connectivity includes three USB 3.0 ports, a mini DisplayPort port, an HDMI port, and a memory card slot."
> Mac screen — https://support.apple.com/kb/SP645 §Display — "13.3-inch (diagonal) LED-backlit glossy widescreen display, 1280-by-800 resolution"
> Mac weight — https://support.apple.com/kb/SP645 §Size and weight — "Weight: 4.5 pounds (2.04 kg)"
> HP weight — https://www.notebookcheck.net/HP-Spectre-Pro-x360-G1-H9W42EA.143349.0.html — "1.5 kg ( = 52.91 oz / 3.31 pounds)"
> Mac Wi-Fi — https://support.apple.com/kb/SP645 §Communications — "based on IEEE 802.11n specification"

## Budget (Jiji Nigeria asking prices on 2026-11-05; asking is not sale)

> 2011 MacBook Pro listings — https://jiji.ng/search?query=macbook%20pro%202011 — "29 results for macbook pro 2011 in Nigeria"
> Lowest seen, a 2011 Core i5 Mac — https://jiji.ng/search?query=macbook%20pro%202011 — "Laptop Apple MacBook Pro 2011 4GB Intel Core i5 HDD 500GB"
> its price — https://jiji.ng/search?query=macbook%20pro%202011 — "₦ 100,000"
> Highest seen for a Core i5 — https://jiji.ng/search?query=macbook%20pro%202011 — "Macbook Pro 2011 Corei5 8gb ram (upgradable) 1 terabyte"
> its price — https://jiji.ng/search?query=macbook%20pro%202011 — "₦ 250,000"
> Sellers list patched Macs — https://jiji.ng/search?query=macbook%20pro%202011 — "MacBook Pro late 2011 running MacOS Sonoma version 14.8.5"
> No G1 listed; the nearest is a 6th-gen G2 — https://jiji.ng/search?query=hp%20spectre%20pro%20x360%20g1 — "HP Spectre pro x360 G2 Processor: 6th Generation Intel Core i7 (6600U) Memory: 8GB DDR4 RAM"
> its price — https://jiji.ng/search?query=hp%20spectre%20pro%20x360%20g1 — "₦ 299,999"
> Replacement battery for this HP — https://jiji.ng/search?query=hp%20spectre%20pro%20x360%20g1 — "PK03XL Battery for HP Spectre Pro X360 Spectre 13 13-4000 13-4100"
> its price — https://jiji.ng/search?query=hp%20spectre%20pro%20x360%20g1 — "₦ 32,000"
> ThinkPad T480, 8th gen, 16 GB — https://jiji.ng/search?query=thinkpad%20t480 — "intel 8th gen quad-core i5-8350u, 16gb ddr4 ram"
> its price — https://jiji.ng/search?query=thinkpad%20t480 — "₦ 280,000"
> T480 CPU score (about 3x the Mac, 2x the HP) — https://www.cpubenchmark.net/cpu.php?cpu=Intel+Core+i5-8350U+%40+1.70GHz — "Multithread Rating 6076 Single Thread Rating 1977"
> Windows 11 lists 8th gen — https://learn.microsoft.com/en-us/windows-hardware/design/minimum/supported/windows-11-24h2-supported-intel-processors — "8th Generation Core i5 Processors"
> and no 5th gen — https://learn.microsoft.com/en-us/windows-hardware/design/minimum/supported/windows-11-24h2-supported-intel-processors — searched for "5th Generation Core": 0 hits
> Windows 10 ESU end — https://support.microsoft.com/en-us/windows/windows-10-consumer-extended-security-updates-esu-program-33e17de9-36b3-43bb-874d-6c53d2e4bf42 — "You can enroll in ESU any time until the programme ends on 12 October, 2027."
> ESU free option — same URL §How much does Windows 10 ESU cost? — "At no additional cost if you are syncing your PC Settings."
> ESU needs 22H2 — same URL §How to get Windows 10 ESU — "ESU is available for eligible devices running Windows 10, version 22H2."
> ESU path — same URL §How to get Windows 10 ESU — "Go to Settings > Update & Security > Windows Update."
> Repair prices are Lagos averages (weak: one shop's blog) — https://millionmancomputer.blogspot.com/2026/05/how-much-does-laptop-repair-cost-in.html — "Here are the average laptop repair prices in Lagos:"
> Cleaning price — same URL — "Laptop cleaning and servicing — ₦5,000 to ₦15,000"
> Battery price — same URL — "Battery replacement — ₦20,000 to ₦80,000"
> Use on a hard surface — https://h10032.www1.hp.com/ctg/Manual/c04807803.pdf §Safety warning notice — "do not place the device directly on your lap or obstruct the device air vents. Use the device only on a hard, flat surface."

## Steps for the asker, in order
1. Settings > System > About: read "Processor".
2. Free test: log CPU temperature (HWiNFO or Core Temp) until it turns off. Near the chip's maximum means heat. Normal temperatures point to power (battery or charger). Also try it on the charger.
3. HP fan test: power on, tap esc, then f2, and run the fan test.
4. Have the fan and heatsink cleaned and the thermal paste replaced. Use the laptop on a hard, flat surface.
5. On Windows 10 22H2: enroll in ESU (free with PC settings sync) for patches to 12 October 2027.
6. Still short of RAM: sell the HP and buy an 8th-gen 16 GB business laptop such as the T480.
7. Take the Mac only if the HP's board is dead and the swap costs nothing. Expect browser fixes to stop in March 2027 unless it moves to OpenCore or another OS.

## Rivals killed
- RAM shortage causes the shutdowns — Microsoft: running out of committed memory causes "freezing, crashing", not a power-off — Ladder A, L1.
- The Mac is the newer or faster machine — PassMark: 2053/1281 (Q4 2011) against 2981/1739 (Q1 2015) — Ladder B, L1.
- More RAM lowers heat — 35 W against 15 W heat budget, and the trip is thermal — Ladder B, L2.
- The old Mac can't browse safely at all (my first guess) — Mozilla patches Firefox ESR 115 on macOS 10.12–10.14 to March 2027 — whattrainisitnow.com.
- The HP really is 3rd gen, so the Mac's 16 GB tips it — HP's guide lists no 3rd- or 4th-gen chip for this line, and even a real i7-3517U only ties the Mac (2115/1327 against 2053/1281) — Ladder B, L1.
- Windows 10 on the HP is already unpatched — consumer ESU runs to 12 October 2027 — Microsoft ESU page.

## Rivals standing
- A worn battery or charger cuts power under load — split by: temperature at the moment of shutdown, and whether it still happens on the charger — next: an HWiNFO log and `powercfg /batteryreport`.
- The fan is dead — split by: the HP UEFI fan test — next query: Spectre x360 G1 fan part price in Nigeria.
- A board fault — split by: shutdowns that continue at normal temperatures after cleaning.
- OpenCore Sequoia on this Mac is good enough for daily use — split by: user reports for MacBookPro8,1 on Sequoia — next query: "MacBookPro8,1 Sequoia OCLP daily use".
- Another OS on the Mac meets the OS-support condition — split by: a current distro's support for this Mac's Wi-Fi and GPU — next query: "Linux Mint MacBookPro8,1 Wi-Fi BCM4331".
- The adviser gains from the swap — split by: the HP's resale value (absent: no G1 on Jiji) against the Mac's ₦100,000–₦250,000 asking range.

## Open
- G1 resale price: absent. The Jiji G1 search shows only G2 listings and parts.
- Thermal paste aging: no measured study found (weak).
- Repair cost: one Lagos shop's blog (weak). Whether paste is included is not stated.
- The asker's "heavy tasks" are unknown. If the working set is above 8 GB, condition (2) binds and the T480 route beats repair.
- Location assumed to be Nigeria.
- Ontogeny (how fast dust builds up where they work) was not studied.

## Search log
21 search turns (one query each). 52 unique URLs fetched, 43 readable. Blocked to curl: support.mozilla.org (JS wall), uefi.org (123 bytes), support.hp.com, h30434.www3.hp.com, everymac.com, helpnetsecurity.com.
