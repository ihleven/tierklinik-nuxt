
Team (nicht mehr verwendet)

# Content-Types

für Content-Type gibt es keine Storyblok-Komponenten, da sie entweder
* über geroutete Seiten gerendert werden
  * Startseite: page
  * Über uns: AboutUsPage
  * Leistungen/index: Page
  * Ratgeber: Ratgeber
    * Unterseiten: guidbook 
  * Artikel: Page
    * Unterseiten: Post
  * unbenutzt: team_page 

## Seiten

### page
* bloks: sections (erlaubt nur sections) und body (erlaubt alles)
* hero_image: image
* hreo_headline: text

### AboutUsPage
* Anzeigename: Über uns
* hero_image: image
* hreo_headline: text
* bloks: sections (erlaubt nur sections)

### team_page
* meta: blocks (erlaubt nur page_hero)
* heading: text
* caption: textarea
* aerzte: blocks (erlaubt nur team_member)
* ordinationshilfen: blocks (erlaubt nur team_member)
* Hero: Plugin advanced_image ?
* Seo: Plugin?

### post

  * title: text
  * subtitle: text
  * image: image
  * teaser: textarea
  * author: single-option auf /authors
  * categories: multi-option auf Stories unter /categories
  * content: richtext  


## Teilseiten mit Routen

### Ratgeber
-> sollte weg...
   * hero_image
   * hero_headline

### guidebook
 * title: text
 * image: image
 * content: richtext 

### leistung

### blog
  * name: text
  * intro: textarea
  * image: imgae
  * body: markdown 

## Verlinkte Content-Types

### author
 * type: Author
   * name: text
   * image: image

### category
* name: text
* image: image




### settings
soll bei ersten Seitenload in einen Store geladen werden und enthält von Seiten losgelöste Inhalte
* navigation: blocks (erlaubt: nav item)
* languages: blocks
*  team: blocks