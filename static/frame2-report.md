# Level 5 Computing Project Report

Working draft. Ed's words only. Grammar and spelling may be corrected. Nothing else is invented.

---

# Title page

- **Title:** The Design and Development of Animators Hive Hub, a Web Platform for Animators
- **Author:** Edem Angel Edem Hogan (P0013366)
- **Centre:** AfriHUB

# Abstract

Animators Hive Hub is a web platform. It is built for animators, and it is made for animators to share their work and connect with other animators, other people in the industry, and enthusiasts, and is open to anyone to join. Currently, animators post their work to YouTube, Instagram, Twitter, and other such platforms. These platforms are meant for anybody to post their work to. So you have a kind of saturation in which a person posts their work and they are competing for attention from many other videos. So if there is a platform that is dedicated to animation, it will be much easier for people who want to see animation videos to find them on such a platform, thus people would be incentivised to post on this platform. The project involved development, testing and live deployment. Right now, users can upload videos, create playlists and add videos to their playlists, log in with Google, comment on uploaded videos, upvote videos, create and join communities, and sort videos by new or top.

# Contents

<!-- Chapters, sections, sub-sections, list of figures, list of tables, list of appendices. Filled when the body exists. -->

# Acknowledgements

<!-- Optional. -->

# 1 Introduction

## The system developed

This is a web app that lets users join, upload their animations, join communities, comment on other people's animations, add their animations to playlists, and connect with other animators in communities.

## Justification for the method or framework used

I decided to host the app on Cloudflare. I then wanted all resources, including the database and files, to also be on Cloudflare to reduce response latency. The initial design used a React front end and Supabase for the entire back end. I changed the front end to SvelteKit for performance purposes. The back end was also done in Svelte, in the same codebase. I wanted the app to have similarity search, which meant storing vectors.

## The solution that emerged

No hardware was developed for this project. The software that was created is a SvelteKit web app, deployed as a server-side rendered app on a Cloudflare Worker. Cloudflare D1 holds the users, videos, playlists, communities, comments and upvotes, uploaded videos are stored in Cloudflare R2, and embeddings are stored in Vectorize. Supabase was actually used and implemented at first, but the project was switched to Cloudflare D1.

## Aims

The aim is to build a dedicated place where animators can come, share their work, find other animators' work, connect with other animators and enthusiasts, and easily have their work discovered by the world.

## Objectives

- The main objective is to have a feed where users can come and see animators' posts, sorted by the top post or the newest post. From that feed, they can click on a video and see its comments, click on the animator's profile and see more videos from the animator, and click on the video's playlist to see other videos the animator added to that playlist. That is expected to facilitate easy discovery of animators' work.

## Overview of the remaining chapters

Chapter 2 presents the system requirements, use cases, and architecture. Chapter 3 describes the system's structural and behavioural design. Chapter 4 explains the implementation, including the programming language, system cutover, data migration, and training. Chapter 5 covers project management, risk management, configuration management, and testing. Chapter 6 evaluates the project aims and objectives and discusses future development.

# 2 Analysis

## Introduction

This chapter analyses the system requirements, use cases, and architecture for Animators Hive Hub.

## Requirements

### Functional requirements

- Users must be able to create an account and upload a video to their account, which shows on the feed.
- Users must be able to create communities, join communities, and send messages to communities.
- Users must be able to comment on other users' videos.
- Users must be able to sort videos in the feed by top videos or new videos.
- Users must be able to create playlists, add videos to them, and add their videos to the playlist.
- Users must be able to upvote videos.

### System-wide non-functional requirements

- Only owners should be able to change or delete their content or upload content to their accounts.
- Users must be signed in to upload videos, comment on videos, and send messages to communities.

## Use cases

A user logs in with Google and uploads a video. While uploading the video, they create a playlist for it and click Upload. The video is added to the feed. They can add it to a different playlist.

## Architecture

### Interfaces with other systems

The app does not connect to any other external services.

### Technical architectures for development and implementation

After the user uploads a video, the video is stored in Cloudflare R2.

Vectorize was used to store embeddings.

### Initial class diagram

<!-- Initial class diagram: docs/initial-class-diagram.svg -->

## Conclusion

This chapter defined the functional and non-functional requirements, the use case, and the technical architecture, with video storage on Cloudflare R2 and embeddings stored in Vectorize. These gave a clear specification for the design stage.

# 3 Design

## Introduction

This chapter describes the design of Animators Hive Hub. It covers the structural model, which sets out the entities and their relationships, and the behavioural model, which sets out how the system responds to user actions.

## Structural model

The entities and relationships felt obvious from the idea and the functional requirements. The main entities are users, videos, playlists, communities, comments, and upvotes.

![Current class diagram](class-diagram.svg)

## Behavioural model

The animation is added to the feed, and other users can comment on it.
Only signed-in users can comment on an animation.
Only the original poster of a comment can delete it.

![Animation upload sequence](sequence-upload.svg)

## Conclusion

# 4 Implementation

## Introduction

## Choice of programming language

## System cutover

Animators Hive Hub is a new system; it did not replace an existing app.

## Data migration

Supabase was only implemented as a design. No real user data was uploaded.

## Training

No user training or user guide was provided.

## Conclusion

# 5 Other project issues

## Project management

The project was done without a formal plan and in one stretch.

## Risk management

The biggest risk was a failed deployment when moving from Supabase to Cloudflare. Initially, the deployment failed. Multiple changes had to be made to the Cloudflare Worker's serverless configuration and the codebase configurations for it to work. Environment variables had to be configured, and the project had to be changed from a static app to a server-side rendered (SSR) app.

## Configuration management

I tracked code and configuration changes with Git and GitHub.

## Testing

The repository includes browser end-to-end tests for the landing page, sign-in dialog keyboard behaviour, sign-up, animation upload, upvoting, commenting, and mobile community navigation, plus an API smoke script covering authentication, media uploads, playlists, communities, profiles, and ownership checks.
I ran the browser end-to-end tests and API smoke script, and they passed.

# 6 Conclusion

## Evaluation of aims and objectives

The project achieved the aim of allowing animators to share their work.

## Future development

Livestreaming would let animators show their creative process live. Premium content would let animators mark some content as premium so users, such as their fans, have to pay to view it.

# References

# Appendices

## A Requirements catalogue

## B Use-case descriptions

## C Detailed class definitions

## D Test scripts

## E User guide

## F System code
