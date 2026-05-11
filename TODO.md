# Miccosukee Yacht Club — Outstanding Work

Running list of planned features and improvements. Not a roadmap, not in priority order.

## Site features

- **Outing calendar.** A schedule of upcoming Club outings (Lake Talquin runs, K-Tower day trips, sail weekends). Each entry has date, vessel, departure point, expected return, and an RSVP/sign-on note. Consider a simple `src/content/outings/*.mdx` collection mirroring the log.

- **Maintenance schedules.** Per-vessel maintenance calendars. PCE: outboard flush after every salt run, oil/filter intervals, lower-unit lube, anode checks, trailer bearings. Nomine Carens: bottom paint cycle, rigging inspection, sail inventory check, diesel service. Probably another content collection keyed by vessel.

- **File repo for manuals.** A members-only or quietly-linked archive of vessel manuals, engine docs, registration paperwork, insurance certificates. Catalina 309 owner's manual, Mercury 150 service manual, Sun Tracker owner's packet. Decide: serve from `/public/manuals/` with an index page, or behind a basic-auth wall on Cloudflare.

- **Photo gallery.** Group photos by outing or vessel. Use Astro's `<Image>` helper end-to-end after lessons from the roster work. Lazy-loaded grid, lightbox optional. Probably wants its own content collection so each outing can carry a gallery.

## Site polish

- **Open Graph / social preview images.** Generate per-page OG images so links shared in text/Slack render with the crest and a clean title card.

- **RSS for the Log.** `/log/rss.xml` so members can subscribe.

- **Favicon set.** Confirm the crest is wired up as `favicon.ico`, `apple-touch-icon`, and a small set of PNG sizes.

- **Per-member pages.** Each member gets a short page with their photo, vessels they captain, outings logged, and bio paragraph. Linked from the about-page roster.

- **Log tags / filters.** Tag entries by vessel (`pce`, `nomine-carens`), by water (`talquin`, `st-marks`, `gulf`), by topic (`maintenance`, `voyage`). Filterable index.

## Operational

- **Naming Committee.** The Nomine Carens is supposed to be named by committee. The Committee does not yet exist. Form it, or accept that it will not be formed and rename the joke.

- **Apply flow.** Confirm the application form actually submits somewhere (currently posts to `/apply/submitted`). Either wire it to email or a simple Cloudflare D1/KV write.

- **Membership directory PDF.** Printable annual roster suitable for the dock box.

- **Backup of content/.** Even though it lives in git, a periodic export of the log and any future content to a separate storage location is prudent. Cheap insurance.

## Ideas worth considering

- **Founders' Day post.** Annual entry marking the Club's constitution. Tradition.
- **Burgee specification page.** The Club's burgee design as a single page with the SVG and the rules for flying it. Companion to the existing bunting entry.
- **Weather/tide widget for home waters.** St. Marks, Lake Talquin, Carrabelle.
- **Logbook in the literal sense.** A page that mimics the look of a paper logbook, paginated by year.
