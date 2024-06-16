<template>
  <q-page padding
    ><div class="row">
      <div class="col-6">
        <p>
          En mêlant la technologie et les croyances dans des mouvements
          ésotériques occultes, il est possible d'attribuer aux outils
          conventionnels une puissance démesurée. Les aventuriers suivant la
          voie de l’adepte de la machine sont d'habiles artisans et d'étonnants
          érudits dans les savoirs mystiques rependus dans la galaxie. Ils sont
          capables de booster les capacités de leurs compagnons par la force de
          leurs convictions dans leurs dogmes, prônant la supériorité
          technologique comme réponse a tous les challenges. Souvent
          charismatique, l'adepte de la machine n'hésitera pas à faire du
          prosélytisme, car tout nouveau fidèle serait un rouage supplémentaire
          dans la grande mécanique de l'univers.
        </p>
      </div>
      <div class="col-6">
        <div class="bg-secondary">
          <div class="q-pa-sm text-center text-bold">Niveau 1</div>
          <div class="row q-pa-sm">
            <q-card flat class="col bg-accent q-ma-xs">
              <q-card-section vertical>
                <p class="text-center text-uppercase text-grey">Vig</p>
                <p class="text-center text-bold">2</p>
              </q-card-section>
            </q-card>
            <q-card flat class="col bg-accent q-ma-xs">
              <q-card-section vertical>
                <p class="text-center text-uppercase text-grey">Agi</p>
                <p class="text-center text-bold">2</p>
              </q-card-section>
            </q-card>
            <q-card flat class="col bg-accent q-ma-xs">
              <q-card-section vertical>
                <p class="text-center text-uppercase text-grey">Adr</p>
                <p class="text-center text-bold">2</p>
              </q-card-section>
            </q-card>
            <q-card flat class="col bg-accent q-ma-xs">
              <q-card-section vertical>
                <p class="text-center text-uppercase text-grey">Int</p>
                <p class="text-center text-bold">5</p>
              </q-card-section>
            </q-card>
            <q-card flat class="col bg-accent q-ma-xs">
              <q-card-section vertical>
                <p class="text-center text-uppercase text-grey">Cha</p>
                <p class="text-center text-bold">3</p>
              </q-card-section>
            </q-card>
          </div>
          <div class="row">
            <q-list class="col-md-4">
              <q-item>
                <q-item-section avatar>
                  <q-icon
                    color="primary"
                    :name="AttributesMap.get(AttributsName.PV)?.Icon"
                  ></q-icon>
                </q-item-section>
                <q-item-section>
                  <q-item-label>10</q-item-label>
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section avatar>
                  <q-icon
                    color="primary"
                    :name="AttributesMap.get(AttributsName.DV)?.Icon"
                  ></q-icon>
                </q-item-section>
                <q-item-section>
                  <q-item-label>3d6</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>

            <q-list class="col-md-4">
              <q-item>
                <q-item-section avatar>
                  <q-icon
                    color="primary"
                    :name="AttributesMap.get(AttributsName.INITIATIVE)?.Icon"
                  ></q-icon>
                </q-item-section>
                <q-item-section>
                  <q-item-label>3d6</q-item-label>
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section avatar>
                  <q-icon
                    color="primary"
                    :name="AttributesMap.get(AttributsName.REFLEXES)?.Icon"
                  ></q-icon>
                </q-item-section>
                <q-item-section>
                  <q-item-label>2d6</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>

            <q-list class="col-md-4">
              <q-item>
                <q-item-section avatar>
                  <q-icon
                    color="primary"
                    :name="AttributesMap.get(AttributsName.ÉSOTÉRISME)?.Icon"
                  ></q-icon>
                </q-item-section>
                <q-item-section>
                  <q-item-label>8d6</q-item-label>
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section avatar>
                  <q-icon
                    color="primary"
                    :name="AttributesMap.get(AttributsName.DÉPLACEMENT)?.Icon"
                  ></q-icon>
                </q-item-section>
                <q-item-section>
                  <q-item-label>3m</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
            <div class="row">
              <q-card flat class="col-4 bg-accent q-ma-xs">
                <q-card-section vertical>
                  <p class="text-center text-uppercase text-grey">
                    Équilibrage
                  </p>
                  <p class="text-center text-bold">2</p>
                </q-card-section>
              </q-card>
              <q-card flat class="col-4 bg-accent q-ma-xs">
                <q-card-section vertical>
                  <p class="text-center text-uppercase text-grey">
                    Équilibrage
                  </p>
                  <p class="text-center text-bold">
                    L'arme qui reçois l'amélioration ajoute 1 dé de supériorité
                    à tout les jet d'attaque fait avec celle-ci
                  </p>
                </q-card-section>
              </q-card>
              <q-card flat class="col-4 bg-accent q-ma-xs">
                <q-card-section vertical>
                  <p class="text-center text-uppercase text-grey">
                    Ordre de douleur
                  </p>
                  <p class="text-caption">
                    Avant d'effectuer une attaque, vous pouvez choisir de subir
                    1 point de dégâts par avantages générés lors du jet
                    l'attaque, et d'infliger un point de dégât aux adversaires
                    également.
                  </p>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import { AttributService, AttributsName } from "src/model/Attribut";
import { ServiceAptitude } from "src/data/ServiceAptitude";
export default defineComponent({
  name: "BuildPage",
  data() {
    return {
      AttributsName,
      AttributesMap: AttributService.getAttributesMap(),
      AptitudesList: ServiceAptitude.findAllAptitudes(),
    };
  },
});
</script>
