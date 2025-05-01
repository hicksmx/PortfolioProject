# <a name="x5354014a96fb9d43f93329de84b2254a545a3d3"></a>**Usability Test Report: Improved Music App Prototype**
## <a name="summary"></a>**1. Summary**
### <a name="key-takeaways"></a>**Key Takeaways**
This usability evaluation tested an improved prototype of our multifunctional music app, which was developed based on feedback from previous A/B testing. We moved forward with Design B’s space-efficient approach but incorporated several improvements to address previously identified issues. The prototype was tested with three core user flows: music discovery and (potential) playback, plugin management and customization, and music organization/tagging. Testing revealed significant improvements in navigation efficiency and content visibility compared to earlier prototypes, but uncovered new challenges with the plugin installation process, music tagging workflow, and search result organization. Users particularly appreciated the collapsible navigation bar, customizable view options, and improved visual feedback throughout the interface. Critical issues requiring immediate attention include the unclear plugin compatibility indicators, the multi-step tagging process that feels unnecessarily complex, and inconsistent behavior when switching between different view modes. Overall, the app’s core modularity concept continues to resonate strongly with users, but implementation details still need refinement to deliver a truly intuitive experience.
## <a name="methods"></a>**2. Methods**
### <a name="goal"></a>**Goal**
The goal of this usability evaluation was to assess the effectiveness, efficiency, and user satisfaction of three core user flows in our improved music app prototype. We aimed to identify remaining usability issues, validate the design changes made based on previous A/B testing feedback, and gather insights to guide the final design iterations before development.
### <a name="description-of-prototype-and-user-flows"></a>**Description of Prototype and User Flows**
The prototype was built upon Design B from our previous A/B testing, featuring a space-efficient interface with a collapsible navigation bar, improved text contrast, and customizable view options. The prototype included high-fidelity visual design with realistic content examples including album artwork, song titles, artist names, and plugin descriptions.

**User Flow 1: Music Discovery and Playback** This flow enables users to browse music libraries, search for specific content, and play music with basic and advanced playback controls. It includes features for browsing by various criteria (artist, album, genre), searching with filters, and accessing playback functions.

**User Flow 2: Plugin Management and Customization** This flow allows users to discover, install, configure, and manage plugins that extend the app’s functionality. Users can browse the plugin marketplace, view plugin details, install/uninstall plugins, and customize plugin settings.

**User Flow 3: Music Organization and Tagging** This flow supports organization and metadata management, allowing users to create playlists, tag songs with custom metadata, filter content by tags, and batch-edit metadata for multiple songs.
### <a name="methods-1"></a>**Methods**
The think-aloud protocol was employed with three representative users to capture their thoughts, confusions, and reactions while interacting with the prototype. Each user completed all three tasks corresponding to the three core user flows.

**Testing Procedure:** 1. Introduction and explanation of the think-aloud method 2. Demonstration of the think-aloud technique 3. Three tasks performed in sequence with continuous verbalization 4. Post-task reflection questions after each task 5. Overall feedback discussion

**Data Collection:** - Observer notes on user behaviors and verbalizations - Task completion metrics (success/failure and time) - Post-task satisfaction ratings (1-5 scale)

**Usability Issue Severity Scale:** 1. **Critical (4):** Prevents task completion; requires immediate resolution 2. **Serious (3):** Significantly hinders performance; high priority fix 3. **Moderate (2):** Creates confusion or inefficiency; should be addressed 4. **Minor (1):** Slight annoyance but doesn’t impede task completion; low priority
### <a name="script"></a>**Script**
#### <a name="briefing"></a>*Briefing*
“Thanks for participating in this usability test. Today, you’ll be testing a prototype of a multifunctional music app designed to be highly customizable. As you interact with the prototype, I’d like you to think aloud – that means verbalizing what you’re thinking, what you’re trying to do, and any confusions or reactions you have.

Let me demonstrate what I mean by thinking aloud. [Opens prototype] I’m looking at this home screen and I notice there’s a hamburger menu in the top left. I’m wondering if that’s where I’ll find navigation options. There’s also a search icon at the top right, which I assume will let me search for music. I see what looks like recently played tracks and some playlists below. I’m not sure if these are my playlists or recommendations. I’ll try tapping on this menu icon to see what options appear…”
### <a name="tasks"></a>**Tasks**
#### <a name="task-1-music-discovery-and-playback"></a>*Task 1: Music Discovery and Playback*
“Imagine you want to find and explore music by your favorite artist. On the app’s home page, locate the featured section showcasing the artist ‘Lena Raine’ and her album ‘Celeste’. From there, navigate to the album page, select any song, and imagine playing it. While exploring, try to adjust the playback settings and add the song to a playlist.”

**Task Completion Definition:** 1. Locate the featured ‘Lena Raine’ section on the home page 2. Navigate to the ‘Celeste’ album page 3. Select any song from the album 4. Adjust at least one playback setting (mockup interaction) 5. Add the song to a playlist (mockup interaction)

**Note:** Since this is a prototype created for a class project, the functionality is limited to mockup interactions. The focus is on evaluating the design flow and user interface rather than actual playback or dynamic content. The prototype includes static pages for Lena Raine’s ‘Celeste’ OST, with no full album lists or working playback features. Adjustments to the prototype were made to reflect these constraints, ensuring the task remains realistic within the current scope of the project.
#### <a name="x05923684f83be3688bac7332c11b999c0d6ca54"></a>*Task 2: Plugin Management and Customization*
“You’ve heard about a visualization plugin called ‘WaveForm’ that creates interesting visual effects while music plays. Find this plugin in the plugin marketplace, view its details, install it, and then configure its basic settings.”

**Task Completion Definition:** 1. Navigate to the plugin marketplace 2. Find the “WaveForm” visualization plugin 3. View plugin details 4. Install the plugin 5. Configure at least one plugin setting
#### <a name="task-3-music-organization-and-tagging"></a>*Task 3: Music Organization and Tagging*
“You want to organize your electronic music collection. Create a new tag called ‘Deep House’, then find all songs in the genre ‘Electronic’ and tag at least three songs with your new ‘Deep House’ tag. Finally, create a smart playlist that automatically includes all songs with the ‘Deep House’ tag.”

**Task Completion Definition:** 1. Create a new tag called “Deep House” 2. Find songs in the “Electronic” genre 3. Apply the “Deep House” tag to at least three songs 4. Create a smart playlist based on the “Deep House” tag
## <a name="findings"></a>**3. Findings**
### <a name="xec4198dbfa946db381f89d38d7e1a2d9d83f8cb"></a>**Task 1 Observations: Music Discovery and Playback**
**Finding 1.1:** All users immediately scrolled to begin searching for the artist, showing that the primary front page function was discoverable. - **Consequence:** Efficient start to the music discovery task.

**Finding 1.2:** Two users expressed confusion about the search results organization, as content was grouped by type (Artists, Albums, Songs) rather than relevance. - **Consequence:** Users had to scroll through potentially irrelevant content to find desired results.

**Finding 1.3:** When navigating to the artist page, all users appreciated the collapsible player bar that remained visible while browsing. - **Consequence:** Improved multitasking while discovering music and maintaining playback control.

**Finding 1.4:** One user attempted to long-press on a song expecting a context menu for playlist options but found none. - **Consequence:** User had to find alternative (less intuitive) path to add song to playlist.

**Finding 1.5:** All users successfully found the playback settings but two users commented that the advanced audio settings were buried too deep in the menu structure. - **Consequence:** Reduced efficiency for power users who might frequently adjust these settings.

**Finding 1.6:** Users appreciated the ability to toggle between grid and list views for album browsing, with two users explicitly mentioning this improvement from previous designs. - **Consequence:** Enhanced user satisfaction and content browsing experience.
### <a name="xcb0860691de4d1d7bd08ce7f5d08b4f3fdbb3bf"></a>**Task 2 Observations: Plugin Management and Customization**
**Finding 2.1:** All users successfully navigated to the plugin marketplace but two users first looked in Settings rather than the dedicated Plugins section. - **Consequence:** Slight delay in beginning the plugin discovery process.

**Finding 2.2:** Users expressed confusion about plugin compatibility indicators, with one user unsure if a plugin would work with their “system” (though this was just a prototype). - **Consequence:** Created uncertainty during the plugin selection process.

**Finding 2.3:** The plugin installation process caused confusion as there was no clear progress indicator or confirmation of successful installation. - **Consequence:** Two users repeatedly tapped the install button, unsure if their action had any effect.

**Finding 2.4:** All users appreciated the visual preview of the WaveForm plugin, with one stating it significantly helped in understanding the plugin’s functionality. - **Consequence:** Improved user confidence in plugin selection.

**Finding 2.5:** The plugin configuration page had too many options displayed at once, causing two users to express feeling overwhelmed. - **Consequence:** Increased cognitive load during configuration process.

**Finding 2.6:** Users were confused by the auto-enable toggle that activated upon installation without clear indication. - **Consequence:** Created uncertainty about whether additional steps were needed to start using the plugin.
### <a name="x3f409aa3a3f6a326f5c067dfc55e38ccb2a9474"></a>**Task 3 Observations: Music Organization and Tagging**
**Finding 3.1:** Two users struggled to find where to create a new tag, first looking in the general settings before discovering the tag management section. - **Consequence:** Delayed start to the organization task.

**Finding 3.2:** The process of applying tags to multiple songs caused frustration, with all users commenting that the multi-select feature was not immediately obvious. - **Consequence:** Users initially attempted to tag songs individually, which would be extremely inefficient for large libraries.

**Finding 3.3:** The filter function to find Electronic genre music worked well, with all users quickly finding this feature. - **Consequence:** Efficient content filtering improved the organization workflow.

**Finding 3.4:** The smart playlist creation interface confused users with its conditional logic operators (AND, OR, NOT). - **Consequence:** Two users created incorrect playlist rules before figuring out the correct approach.

**Finding 3.5:** All users commented positively on the tag color-coding system and visual representation of tags attached to songs. - **Consequence:** Enhanced visual recognition of organization systems.

**Finding 3.6:** Users were uncertain about whether changes to tags were automatically saved or required explicit saving. - **Consequence:** Two users repeatedly looked for save buttons, interrupting their workflow.
### <a name="x32460a71eeb5892976dd0d24f928e0a8f5b0df0"></a>**Table Summarizing Observed Usability Issues**

|ID|Task|Screen|Severity|Interface Element|Issue Description|
| :- | :- | :- | :- | :- | :- |
|U1|1|Search Results|2|Results Layout|Results grouped by content type rather than relevance, requiring extra scrolling|
|U2|1|Song List|3|Context Menu|Lack of expected context menu on long-press for quick actions|
|U3|1|Playback|2|Settings Menu|Advanced audio settings buried too deep in nested menus|
|U4|2|Plugin Marketplace|3|Navigation|Users looked for plugins in Settings first, suggesting navigational uncertainty|
|U5|2|Plugin Details|3|Compatibility|Unclear indicators for plugin compatibility and requirements|
|U6|2|Plugin Installation|4|Feedback|No progress indicator or confirmation during plugin installation|
|U7|2|Plugin Config|3|Layout|Too many configuration options displayed simultaneously, overwhelming users|
|U8|3|Tag Management|3|Navigation|Creating new tags not discoverable, hidden in secondary menu|
|U9|3|Tagging Interface|4|Multi-select|Non-obvious multi-select feature for batch applying tags|
|U10|3|Smart Playlist|3|Conditional Logic|Confusing interface for setting up conditional tag-based rules|
|U11|3|Tag Editor|2|Save Feedback|Unclear whether tag changes save automatically or require explicit action|
## <a name="recommendations"></a>**4. Recommendations**
Based on our usability evaluation findings, we recommend the following improvements to address identified issues:

1. **Search & Discovery Improvements**
   - Redesign search results to prioritize by relevance first, then offer category filtering
   - Implement contextual long-press menus for quick actions on songs, albums, and artists
   - Restructure playback settings to bring frequently used controls to the first level
1. **Plugin System Refinements**
   - Create a more prominent access point to the plugin marketplace
   - Redesign plugin details page with clear compatibility indicators and requirements
   - Add visual progress indicators during installation and clear success/failure feedback
   - Group plugin settings into collapsible categories to reduce visual complexity
1. **Organization System Optimization**
   - Make tag creation more discoverable with a persistent “+” button in relevant screens
   - Redesign the multi-select interface with clearer affordances and a tutorial overlay for first use
   - Simplify smart playlist creation with visual rule building rather than text operators
   - Add consistent save behavior and feedback throughout organization interfaces
### <a name="refined-user-stories"></a>**Refined User Stories**
1. As a music listener, I want search results organized by relevance with quick filters so I can efficiently find exactly what I’m looking for.
1. As a power user, I want contextual menus available through gestures like long-press so I can quickly perform common actions without navigating through multiple screens.
1. As a plugin explorer, I want clear visual feedback during the installation process so I know exactly when a plugin is ready to use.
1. As an organization-focused user, I want intuitive batch operations for tagging so I can efficiently organize large music collections.
1. As a playlist creator, I want a visual rule builder for smart playlists so I can easily create complex content filters without understanding Boolean logic.
1. As a customization enthusiast, I want to quickly understand plugin compatibility and requirements so I can make informed decisions about which plugins to install.
1. As a regular user, I want consistent save behavior and clear feedback so I never worry about losing my organizational changes.

These recommendations and refined user stories directly address the usability issues uncovered during testing while remaining true to the app’s core concept of modularity and customization. Implementing these changes will significantly improve the user experience while maintaining the flexibility that differentiates our music app from competitors.
