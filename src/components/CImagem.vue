<template>
  <div>
    <div class="img-container">
        <template>
            <template v-if="baseString64 || baseString64Full">
                <img id="id-img" :src="getBase64()" width="200" height="300" class="canvas-container" @click="openModel()"/>
            </template>
            <template v-else>
                <img id="id-img" width="200" height="300" class="canvas-container" @click="openModel()"/>
            </template>
        </template>

        <div class="img-descricao d-flex justify-content-between">
            <div v-if="nome" style="">
            {{ nome }}
            </div>

            <div v-if="valor" class="">
            R$ {{ valor }} 
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'CImagem',
    props: {
        nome: {
            type: String,
            required: true,
            default: null,
        },
        valor: {
            type: [String, Number],
            required: false,
            default: null,
        },
        baseString64: {
            type: String,
            required: false,
            default: null,
        },
        baseString64Full: {
            type: String,
            required: false,
            default: '',
        }
    },
    data () {
        return {
            houver: false
        }
    },

    methods: {
        openModel () {
            console.log('Open model de imagemm')
        },

        getBase64 () {
            if(this.baseString64Full) {
                return this.baseString64Full

            }

            if (this.baseString64) {
                return 'data:image/png;base64,'+ this.baseString64

            }
        }
    }
}
</script>

<style scoped>
.img-container {
    margin: 1em;
}
.img-descricao {
    max-width: 200px;
}

.canvas-container {
    background: white;
    transition: 1s;
}
.canvas-container:hover {
    transform: scale(1.1);
}
</style>
