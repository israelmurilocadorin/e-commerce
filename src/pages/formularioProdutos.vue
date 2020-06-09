<template>
    <div class="full">
        <div class="formulario">
            <form action="">
                <div class="container">
                    <h1>{{ nome }}</h1>
                    
                    <div class="row">    
                        <div class="col-md-6 form-group">
                            <label for="nome_produto" class="col-form-label">Nome produto</label>
                            <input v-model="form.nome" type="text" name="nome_produto" id="nome_produto" class="form-control">
                        </div>

                        <div class="col-md-6 form-group">
                            <label for="valor" class="col-form-label">Valor</label>
                            <input type="number" v-model="form.valor" name="valor" id="valor" class="form-control">
                        </div>

                        <div class="col-md-12 form-group">
                            <label for="img_1" class="col-form-label">Colocar Imagens: ( {{ numeroImagens }} / 3)</label>
                            <input type="file" @change="previewFiles" multiple>
                        </div>

                        <div class="row">
                            <div class="d-flex">
                                <div v-for="(item, index) in form.imagens" :key="item.id" class="m-2">
                                    <c-imagem :nome="form.imagens[index].nome" :valor="form.valor" :baseString64Full="item.base64"/>
                                    <div class="form-group">
                                        <label for="nome_produto">Observação imagem {{ index + 1 }}:</label>
                                        <input v-model="form.imagens[index].nome" type="text" :id="`nome_produto${item.index}`" class="form-control">
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-md-6 form-group">
                            <b-form-group label="Categoria">
                                <b-form-radio v-model="form.selected.categoria" name="some-radios" value="M">Masculino</b-form-radio>
                                <b-form-radio v-model="form.selected.categoria" name="some-radios" value="F">Feminino</b-form-radio>
                            </b-form-group>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

export default {
    name: 'FormularioProdutos',
    data () {
        return {
            nome: "FormulárioProdutos",
            form: {
                nome: '',
                valor: 0,
                imagens: [],
                categoria: 'M'
            }
        }

    },
    computed:{
        numeroImagens () {
            return this.form.imagens.length
        }
    },
    methods: {
        validateSize (event, value) {
            console.log(event)
            console.log(this.imagens)
            console.log(value)
            
        },
    
        previewFiles(event) {
            let arrFile = Object.values(event.target.files)
            console.log('arrFile',arrFile)
            if (arrFile.length === 0)
                return
            
            this.form.imagens = []            
            arrFile.forEach((file, index) => {
                const reader = new FileReader()
                reader.readAsDataURL(file)
            
            reader.onload = readerEvent => {
                    console.log('readerEvent:',readerEvent)
                    var content = readerEvent.target.result
                    console.log('content', content)
                    
                    this.form.imagens.push({
                        id: index + 1,
                        nome: '',
                        base64: content
                    })
                }
            })
        }
    }
}
</script>

<style scoped>
    .full {
        display: grid;
        grid-template-rows: 200vh;
        grid-template-areas: "formulario";
    }

    .form {
        grid-area: "formulario";
        background: black;
        overflow: auto;
    }
</style>